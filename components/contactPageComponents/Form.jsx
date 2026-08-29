"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import {
  User,
  Mail,
  Building2,
  MessageSquare,
  ChevronDown,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Send,
  X,
  Clock,
  LifeBuoy,
  Sparkles,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Static config                                                             */
/* -------------------------------------------------------------------------- */

const TOPIC_OPTIONS = [
  { value: "General inquiry", label: "General inquiry" },
  { value: "Product question", label: "Product question" },
  { value: "Automation consultation", label: "Automation consultation" },
  { value: "Partnership", label: "Partnership" },
  { value: "Technical support", label: "Technical support" },
  { value: "Other", label: "Other" },
];

const SOCIAL_LINKS = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com" },
  { icon: CiLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: FaXTwitter, label: "X (Twitter)", href: "https://x.com" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
];

const INITIAL_FORM = {
  name: "",
  email: "",
  company: "",
  topic: "",
  message: "",
};

/* -------------------------------------------------------------------------- */
/*  Animation variants                                                        */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

/* -------------------------------------------------------------------------- */
/*  Reusable field shell                                                      */
/* -------------------------------------------------------------------------- */

function FieldShell({ id, label, optional, error, icon: Icon, children }) {
  return (
    <motion.div variants={fieldVariants} className="flex w-full flex-col gap-2">
      <label
        htmlFor={id}
        className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-foreground-muted"
      >
        {label}
        {optional && (
          <span className="text-[10px] font-normal normal-case text-foreground-muted/60">
            (optional)
          </span>
        )}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted/60 transition-colors duration-300 peer-focus:text-primary"
          />
        )}
        {children}
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            className="flex items-center gap-1 text-xs font-medium text-red-500"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const inputBase =
  "peer w-full rounded-xl border border-border-light bg-background/60 py-3 text-sm text-foreground outline-none " +
  "transition-all duration-300 ease-in-out placeholder:text-foreground-muted/50 " +
  "hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/40 " +
  "disabled:cursor-not-allowed disabled:opacity-60";

/* -------------------------------------------------------------------------- */
/*  Main component                                                            */
/* -------------------------------------------------------------------------- */

const Form = () => {
  const [values, setValues] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [toast, setToast] = useState(null); // { type, message }

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  }, []);

  const validate = useCallback((data) => {
    const next = {};
    if (!data.name.trim()) next.name = "Enter your full name.";
    if (!data.email.trim()) {
      next.email = "Enter an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!data.topic) next.topic = "Choose a topic.";
    if (!data.message.trim()) next.message = "Tell us a bit about your project.";
    return next;
  }, []);

  const dismissToast = useCallback(() => setToast(null), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      // Simulated network request — swap for a real endpoint call.
      await new Promise((resolve, reject) =>
        setTimeout(() => (Math.random() > 0.08 ? resolve() : reject()), 1400)
      );
      setStatus("success");
      setToast({
        type: "success",
        message: "Message sent. Our team will reply within one business day.",
      });
      setValues(INITIAL_FORM);
    } catch {
      setStatus("error");
      setToast({
        type: "error",
        message: "Something went wrong. Please try again in a moment.",
      });
    } finally {
      setTimeout(() => setStatus("idle"), 1800);
      setTimeout(dismissToast, 5000);
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <section className="relative w-full px-2 py-10 md:px-4 lg:py-16">
      {/* Ambient gradient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-12">
        {/* ---------------------------------------------------------------- */}
        {/* Form card                                                        */}
        {/* ---------------------------------------------------------------- */}
        <motion.form
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          onSubmit={handleSubmit}
          noValidate
          className="relative flex w-full flex-col gap-7 overflow-hidden rounded-2xl border border-border-light bg-card/70 px-5 py-8 shadow-xl shadow-black/5 ring-1 ring-black/5 backdrop-blur-xl md:px-10 md:py-10 lg:col-span-7"
        >
          <motion.div variants={fieldVariants} className="flex flex-col gap-2">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
              <Sparkles className="h-3 w-3" />
              Let&apos;s talk
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Send us a message
            </h2>
            <p className="text-sm text-foreground-muted">
              Tell us about your workflow and we&apos;ll route it to the right
              person on our team.
            </p>
          </motion.div>

          <FieldShell id="name" label="Full name" icon={User} error={errors.name}>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="Enter your full name"
              aria-invalid={Boolean(errors.name)}
              className={`${inputBase} pl-11 pr-4`}
            />
          </FieldShell>

          <FieldShell id="email" label="Email" icon={Mail} error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="you@company.com"
              aria-invalid={Boolean(errors.email)}
              className={`${inputBase} pl-11 pr-4`}
            />
          </FieldShell>

          <FieldShell
            id="company"
            label="Company / organization"
            optional
            icon={Building2}
          >
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              value={values.company}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="Acme Inc."
              className={`${inputBase} pl-11 pr-4`}
            />
          </FieldShell>

          <FieldShell id="topic" label="What can we help with?" error={errors.topic}>
            <select
              id="topic"
              name="topic"
              value={values.topic}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.topic)}
              className={`${inputBase} appearance-none pl-4 pr-10 ${
                values.topic ? "text-foreground" : "text-foreground-muted/50"
              }`}
            >
              <option value="" disabled>
                Select an option
              </option>
              {TOPIC_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="text-foreground">
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted/60"
            />
          </FieldShell>

          <FieldShell
            id="message"
            label="Message"
            icon={MessageSquare}
            error={errors.message}
          >
            <textarea
              id="message"
              name="message"
              rows={6}
              value={values.message}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="Tell us about your goals, workflow, or project..."
              aria-invalid={Boolean(errors.message)}
              className={`${inputBase} resize-none pl-11 pt-3`}
            />
          </FieldShell>

          <motion.div variants={fieldVariants} className="flex w-full justify-center pt-2">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
              className="flex w-full items-center justify-center gap-2 rounded-3xl bg-primary px-6 py-3 text-sm font-medium text-foreground shadow-lg shadow-primary/20 transition-colors duration-300 ease-in-out hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70 md:text-base"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Sent
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.form>

        {/* ---------------------------------------------------------------- */}
        {/* Contact info sidebar                                             */}
        {/* ---------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-fit w-full flex-col overflow-hidden rounded-2xl border border-border-light bg-card/70 shadow-xl shadow-black/5 ring-1 ring-black/5 backdrop-blur-xl lg:col-span-5"
        >
          <InfoRow
            icon={Mail}
            eyebrow="Email"
            title="hello@nexora.com"
            note="Talk to our team"
          />
          <InfoRow
            icon={LifeBuoy}
            eyebrow="Support"
            title="support@nexora.com"
            note="Need technical help?"
          />
          <InfoRow
            icon={Clock}
            eyebrow="Typical response time"
            title="Within 1 business day"
            note="Monday – Friday, 9:00 AM – 6:00 PM"
            last
          />

          <div className="flex w-full flex-col gap-4 px-6 py-8">
            <p className="text-xs font-bold text-foreground-muted">Follow us</p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-border-light bg-background/60 text-foreground-muted transition-colors duration-300 ease-in-out hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Toast                                                             */}
      {/* ---------------------------------------------------------------- */}
      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed bottom-6 right-6 z-50 flex max-w-sm items-start gap-3 rounded-xl border px-4 py-3 shadow-2xl backdrop-blur-xl ${
              toast.type === "success"
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600"
                : "border-red-500/30 bg-red-500/10 text-red-500"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
            ) : (
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
            )}
            <p className="text-sm font-medium leading-snug">{toast.message}</p>
            <button
              type="button"
              onClick={dismissToast}
              aria-label="Dismiss notification"
              className="ml-1 shrink-0 rounded-full p-0.5 opacity-70 transition-opacity hover:opacity-100"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  Sidebar row                                                               */
/* -------------------------------------------------------------------------- */

function InfoRow({ icon: Icon, eyebrow, title, note, last }) {
  return (
    <div
      className={`group flex w-full items-start gap-4 px-6 py-7 transition-colors duration-300 ease-in-out hover:bg-primary/5 ${
        !last ? "border-b border-border" : ""
      }`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 ease-in-out group-hover:scale-105">
        <Icon className="h-4.5 w-4.5" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs font-bold uppercase tracking-wide text-foreground-muted">
          {eyebrow}
        </p>
        <p className="text-sm font-medium text-foreground md:text-lg">{title}</p>
        <p className="text-xs text-primary">{note}</p>
      </div>
    </div>
  );
}

export default Form;