"use client";

import { useEffect, useRef, useState } from "react";
import {
  UserPlus,
  Bot,
  ShieldCheck,
  Mail,
  Check,
} from "lucide-react";

const STEPS = [
  {
    icon: UserPlus,
    label: "New customer request",
    description: "A support ticket lands in the queue",
    duration: 1600,
  },
  {
    icon: Bot,
    label: "Agent drafts a response",
    description: "Reads the ticket and proposes a reply",
    duration: 2000,
  },
  {
    icon: ShieldCheck,
    label: "Response is validated",
    description: "Checked against policy before it goes out",
    duration: 1700,
  },
  {
    icon: Mail,
    label: "Reply sent to customer",
    description: "Delivered straight to their inbox",
    duration: 1500,
  },
];

const HOLD_AT_END = 2200;
const HOLD_AT_START = 700;

export default function WorkflowVisual() {
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
          setPhase(-1);
          schedule(() => run(0), HOLD_AT_START);
        }, HOLD_AT_END);

        return;
      }

      setPhase(step);
      schedule(() => run(step + 1), STEPS[step].duration);
    };

    schedule(() => run(0), HOLD_AT_START);

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const bannerOn = phase === STEPS.length;

  return (
    <div className="w-full">
      <style>{`
        @keyframes wv-pulse-ring {
          0% {
            box-shadow: 0 0 0 0 var(--primary-glow);
          }

          70% {
            box-shadow: 0 0 0 9px rgba(139, 92, 246, 0);
          }

          100% {
            box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
          }
        }

        @keyframes wv-fade-up {
          from {
            opacity: 0;
            transform: translateY(6px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes wv-pop {
          0% {
            transform: scale(0.4);
            opacity: 0;
          }

          60% {
            transform: scale(1.15);
            opacity: 1;
          }

          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes wv-blink {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0.35;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .wv-anim,
          .wv-anim * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* Workflow Card */}
      <div
        className="
          absolute
          top-2
          left-1/2
          -translate-x-1/2
          wv-anim
          mx-auto
          w-full
          max-w-md
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
              Customer Support Automation
            </h3>
          </div>

          {/* Active */}
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
            <span
              className="h-1.5 w-1.5 rounded-full bg-success"
              style={{
                animation: "wv-blink 1.8s ease-in-out infinite",
              }}
            />

            <span className="text-[11px] font-medium text-success">
              Active
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="bg-background-secondary px-6 py-7">
          <div className="relative mx-auto max-w-sm">
            {STEPS.map((step, i) => {
              const isActive = phase === i;
              const isDone = phase > i || bannerOn;
              const isLast = i === STEPS.length - 1;

              return (
                <div key={step.label}>
                  {/* Step */}
                  <div
                    className="
                      flex
                      items-center
                      gap-3.5
                      rounded-xl
                      border
                      px-3.5
                      py-3.5
                      transition-all
                      duration-500
                    "
                    style={{
                      borderColor: isActive
                        ? "var(--primary)"
                        : isDone
                        ? "rgba(34, 197, 94, 0.25)"
                        : "var(--border)",

                      backgroundColor: isActive
                        ? "rgba(139, 92, 246, 0.07)"
                        : "var(--card)",

                      boxShadow: isActive
                        ? "0 0 28px var(--primary-glow)"
                        : "none",
                    }}
                  >
                    {/* Icon */}
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
                        transition-all
                        duration-500
                      "
                      style={{
                        borderColor: isActive
                          ? "var(--primary)"
                          : isDone
                          ? "rgba(34, 197, 94, 0.25)"
                          : "var(--border-light)",

                        backgroundColor: isActive
                          ? "rgba(139, 92, 246, 0.12)"
                          : isDone
                          ? "rgba(34, 197, 94, 0.07)"
                          : "var(--background-secondary)",

                        color: isActive
                          ? "var(--primary-light)"
                          : isDone
                          ? "var(--success)"
                          : "var(--foreground-muted)",

                        animation: isActive
                          ? "wv-pulse-ring 1.4s ease-out infinite"
                          : "none",
                      }}
                    >
                      {isDone ? (
                        <Check
                          className="h-4 w-4"
                          style={{
                            animation: "wv-pop 0.4s ease-out",
                          }}
                        />
                      ) : (
                        <step.icon className="h-4 w-4" />
                      )}
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] font-medium text-foreground">
                        {step.label}
                      </p>

                      <p className="mt-0.5 truncate text-[11.5px] text-foreground-muted">
                        {step.description}
                      </p>
                    </div>

                    {/* Status */}
                    <span
                      className="
                        shrink-0
                        text-[10.5px]
                        font-medium
                        transition-colors
                        duration-300
                      "
                      style={{
                        color: isDone
                          ? "var(--success)"
                          : isActive
                          ? "var(--primary-light)"
                          : "var(--foreground-muted)",
                      }}
                    >
                      {isDone
                        ? "Done"
                        : isActive
                        ? "Running"
                        : "Waiting"}
                    </span>
                  </div>

                  {/* Connector */}
                  {!isLast && (
                    <div
                      className="
                        relative
                        ml-[1.6rem]
                        h-6
                        w-px
                        overflow-hidden
                        bg-border
                      "
                    >
                      <div
                        className="
                          absolute
                          left-0
                          top-0
                          w-px
                          transition-all
                          ease-linear
                        "
                        style={{
                          height:
                            phase > i || bannerOn
                              ? "100%"
                              : "0%",

                          backgroundColor:
                            phase > i || bannerOn
                              ? "var(--success)"
                              : "var(--primary)",

                          transitionDuration: `${step.duration}ms`,

                          boxShadow:
                            phase > i || bannerOn
                              ? "0 0 7px rgba(34, 197, 94, 0.45)"
                              : "0 0 7px var(--primary-glow)",
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Completion Banner */}
          <div
            className="mt-5 overflow-hidden transition-all duration-500"
            style={{
              maxHeight: bannerOn ? "48px" : "0px",
              opacity: bannerOn ? 1 : 0,
            }}
          >
            <div
              className="
                flex
                items-center
                gap-2
                rounded-lg
                border
                border-success/20
                bg-success/5
                px-4
                py-2.5
              "
              style={{
                animation: bannerOn
                  ? "wv-fade-up 0.4s ease-out"
                  : "none",
              }}
            >
              <div
                className="
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-success/10
                "
              >
                <Check className="h-3.5 w-3.5 text-success" />
              </div>

              <span className="text-[12px] font-medium text-success">
                Workflow completed successfully
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}