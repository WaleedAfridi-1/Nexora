"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot,
  ShieldCheck,
  Check,
  AlertTriangle,
  UserCheck,
  ArrowDown,
} from "lucide-react";

const STEPS = [
  {
    icon: Bot,
    label: "AI Agent",
    description: "Generates a response from the request",
  },
  {
    icon: ShieldCheck,
    label: "Validation",
    description: "Checks the response before taking action",
  },
];

const HOLD_AT_END = 2200;
const HOLD_AT_START = 700;

export default function ReliabilityWorkflow() {
  const [phase, setPhase] = useState(-1);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const schedule = (fn, ms) => {
      timeoutRef.current = setTimeout(fn, ms);
    };

    const run = (step) => {
      if (step > STEPS.length - 1) {
        setPhase(STEPS.length);

        schedule(() => {
          setPhase(STEPS.length + 1);

          schedule(() => {
            setPhase(-1);

            schedule(() => run(0), HOLD_AT_START);
          }, 1800);
        }, HOLD_AT_END);

        return;
      }

      setPhase(step);

      schedule(() => run(step + 1), step === 0 ? 1800 : 1800);
    };

    schedule(() => run(0), HOLD_AT_START);

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const validationDone = phase >= 2;
  const showDecision = phase >= 2;
  const validPath = phase === 3 || phase === 4 || phase === 5;
  const reviewPath = phase === 6;

  return (
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 my-12 ">
      <style>{`
        @keyframes rw-pulse {
          0% {
            box-shadow: 0 0 0 0 var(--primary-glow);
          }

          70% {
            box-shadow: 0 0 0 8px rgba(139, 92, 246, 0);
          }

          100% {
            box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
          }
        }

        @keyframes rw-pop {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }

          70% {
            transform: scale(1.15);
            opacity: 1;
          }

          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes rw-fade {
          from {
            opacity: 0;
            transform: translateY(5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rw-anim,
          .rw-anim * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* Main Card */}
      <div
        className="
          rw-anim
          w-full
          overflow-hidden
          rounded-2xl
          border
          border-border
          bg-card
          shadow-[0_20px_60px_rgba(0,0,0,0.3)]
        "
      >
        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-border
            px-5
            py-4
          "
        >
          <div>
            <p className="text-[11px] font-medium text-primary">
              Workflow
            </p>

            <h3 className="mt-0.5 text-sm font-semibold text-foreground">
              AI Response Processing
            </h3>
          </div>

          <div
            className="
              flex
              items-center
              gap-1.5
              rounded-full
              border
              border-success/20
              bg-success/5
              px-2.5
              py-1
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success" />

            <span className="text-[11px] font-medium text-success">
              Reliable
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="bg-background-secondary px-5 py-8 sm:px-8">
          <div className="mx-auto max-w-md">

            {/* AI Agent */}
            <Node
              icon={Bot}
              label="AI Agent"
              description="Generates a response from the request"
              active={phase === 0}
              done={phase > 0}
            />

            {/* Connector */}
            <Connector active={phase > 0} />

            {/* Validation */}
            <Node
              icon={ShieldCheck}
              label="Validation"
              description="Checks the response before taking action"
              active={phase === 1}
              done={validationDone}
            />

            {/* Decision */}
            <div
              className={`
                overflow-hidden
                transition-all
                duration-500
                ${
                  showDecision
                    ? "max-h-[360px] opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              {/* Decision label */}
              <div className="flex justify-center py-4">
                <div
                  className="
                    rounded-full
                    border
                    border-border
                    bg-card
                    px-3
                    py-1
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-wider
                    text-foreground-muted
                  "
                >
                  Validation result
                </div>
              </div>

              {/* Branches */}
              <div className="grid grid-cols-2 gap-3">

                {/* Valid */}
                <DecisionCard
                  icon={Check}
                  title="Valid"
                  description="Continue"
                  active={validPath}
                  success
                />

                {/* Review */}
                <DecisionCard
                  icon={AlertTriangle}
                  title="Needs review"
                  description="Human review"
                  active={reviewPath}
                />
              </div>

              {/* Branch connector */}
              <div className="relative mx-auto h-8 w-full">
                <div
                  className="
                    absolute
                    left-1/4
                    right-1/4
                    top-0
                    h-px
                    bg-border
                  "
                />

                <div
                  className="
                    absolute
                    left-1/4
                    top-0
                    h-4
                    w-px
                    bg-border
                  "
                />

                <div
                  className="
                    absolute
                    right-1/4
                    top-0
                    h-4
                    w-px
                    bg-border
                  "
                />

                <div
                  className={`
                    absolute
                    left-1/2
                    top-0
                    h-8
                    w-px
                    -translate-x-1/2
                    transition-all
                    duration-500
                    ${
                      validPath || reviewPath
                        ? "bg-success"
                        : "bg-border"
                    }
                  `}
                />
              </div>

              {/* Final Action */}
              <div className="flex flex-col items-center">
                <div
                  className={`
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    border
                    px-4
                    py-3.5
                    transition-all
                    duration-500
                    ${
                      validPath || reviewPath
                        ? "border-success/25 bg-success/5"
                        : "border-border bg-card"
                    }
                  `}
                >
                  <div
                    className={`
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      transition-all
                      duration-500
                      ${
                        validPath || reviewPath
                          ? "border-success/25 bg-success/10 text-success"
                          : "border-border-light bg-background-secondary text-foreground-muted"
                      }
                    `}
                  >
                    {validPath || reviewPath ? (
                      <Check
                        className="h-4 w-4"
                        style={{
                          animation: "rw-pop 0.4s ease-out",
                        }}
                      />
                    ) : (
                      <UserCheck className="h-4 w-4" />
                    )}
                  </div>

                  <div>
                    <p className="text-[13px] font-medium text-foreground">
                      Final Action
                    </p>

                    <p className="mt-0.5 text-[11.5px] text-foreground-muted">
                      Execute the approved response
                    </p>
                  </div>

                  <span
                    className={`
                      ml-auto
                      text-[10.5px]
                      font-medium
                      ${
                        validPath || reviewPath
                          ? "text-success"
                          : "text-foreground-muted"
                      }
                    `}
                  >
                    {validPath || reviewPath ? "Ready" : "Waiting"}
                  </span>
                </div>
              </div>
            </div>

            {/* Completion */}
            <div
              className={`
                mt-5
                flex
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-success/20
                bg-success/5
                px-4
                py-2.5
                transition-all
                duration-500
                ${
                  phase === 5
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                }
              `}
            >
              <Check className="h-3.5 w-3.5 text-success" />

              <span className="text-[11.5px] font-medium text-success">
                Action completed safely
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Workflow Node                    */
/* -------------------------------- */

function Node({
  icon: Icon,
  label,
  description,
  active,
  done,
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3.5
        rounded-xl
        border
        bg-card
        px-3.5
        py-3.5
        transition-all
        duration-500
      "
      style={{
        borderColor: active
          ? "var(--primary)"
          : done
          ? "rgba(34, 197, 94, 0.25)"
          : "var(--border)",

        backgroundColor: active
          ? "rgba(139, 92, 246, 0.07)"
          : "var(--card)",

        boxShadow: active
          ? "0 0 28px var(--primary-glow)"
          : "none",
      }}
    >
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
        "
        style={{
          borderColor: active
            ? "var(--primary)"
            : done
            ? "rgba(34, 197, 94, 0.25)"
            : "var(--border-light)",

          color: active
            ? "var(--primary-light)"
            : done
            ? "var(--success)"
            : "var(--foreground-muted)",

          backgroundColor: active
            ? "rgba(139, 92, 246, 0.12)"
            : done
            ? "rgba(34, 197, 94, 0.07)"
            : "var(--background-secondary)",

          animation: active
            ? "rw-pulse 1.4s ease-out infinite"
            : "none",
        }}
      >
        {done ? (
          <Check
            className="h-4 w-4"
            style={{
              animation: "rw-pop 0.4s ease-out",
            }}
          />
        ) : (
          <Icon className="h-4 w-4" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-medium text-foreground">
          {label}
        </p>

        <p className="mt-0.5 text-[11.5px] text-foreground-muted">
          {description}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Connector                        */
/* -------------------------------- */

function Connector({ active }) {
  return (
    <div className="relative mx-auto h-7 w-px overflow-hidden bg-border">
      <div
        className="absolute left-0 top-0 w-px transition-all duration-700"
        style={{
          height: active ? "100%" : "0%",
          backgroundColor: active
            ? "var(--success)"
            : "var(--primary)",
        }}
      />
    </div>
  );
}

/* -------------------------------- */
/* Decision Card                    */
/* -------------------------------- */

function DecisionCard({
  icon: Icon,
  title,
  description,
  active,
  success = false,
}) {
  return (
    <div
      className="
        rounded-xl
        border
        px-3
        py-3
        text-center
        transition-all
        duration-500
      "
      style={{
        borderColor: active
          ? success
            ? "rgba(34,197,94,0.35)"
            : "rgba(234,179,8,0.35)"
          : "var(--border)",

        backgroundColor: active
          ? success
            ? "rgba(34,197,94,0.06)"
            : "rgba(234,179,8,0.05)"
          : "var(--card)",
      }}
    >
      <div
        className="
          mx-auto
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
        "
        style={{
          backgroundColor: active
            ? success
              ? "rgba(34,197,94,0.1)"
              : "rgba(234,179,8,0.1)"
            : "var(--background-secondary)",

          color: active
            ? success
              ? "var(--success)"
              : "#eab308"
            : "var(--foreground-muted)",
        }}
      >
        <Icon className="h-4 w-4" />
      </div>

      <p className="mt-2 text-[12px] font-medium text-foreground">
        {title}
      </p>

      <p className="mt-0.5 text-[10.5px] text-foreground-muted">
        {description}
      </p>
    </div>
  );
}