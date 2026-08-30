"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/integration", label: "Integration" },
  { href: "#product", label: "Product" },
  { href: "#feature", label: "Feature" },
  { href: "#resources", label: "Resources" },
  { href: "#pricing", label: "Pricing" },
];

const menuVariants = {
  closed: {
    y: "-100%",
    opacity: 0,
    transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1], when: "afterChildren" },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.32, 0.72, 0, 1],
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const linkVariants = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);


  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header
      className={`fixed left-1/2 z-999 w-full max-w-6xl -translate-x-1/2 px-4 pt-4 lg:pt-6 ${
        isOpen ? "bg-background" : ""
      }`}
    >
      <nav
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-4xl border border-border px-4 transition-all duration-500 ease-in-out lg:px-3 lg:backdrop-blur-2xl ${
          isOpen ? "border-none bg-background" : "bg-primary-glow/40 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <div className="flex h-full items-center gap-1.5 text-foreground">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-7 w-7 shrink-0 cursor-pointer overflow-hidden rounded-full">
              <Image
                className="object-cover object-center"
                src="/logo.png"
                alt="Nexora Logo"
                fill
                sizes="28px"
              />
            </div>
            <h5 className="text-sm font-semibold tracking-tight transition-colors duration-400 hover:text-accent md:text-lg lg:text-xl">
              Nexora<span className="ml-1.5 text-primary">.</span>
            </h5>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="block rounded-full p-1.5 text-2xl text-foreground transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "open"}
              initial={{ rotate: isOpen ? -90 : 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: isOpen ? 90 : -90, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex"
            >
              {isOpen ? (
                <HiOutlineX className="active:scale-95" />
              ) : (
                <HiMenu className="active:scale-95" />
              )}
            </motion.span>
          </AnimatePresence>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 rounded-3xl px-6 py-3 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-foreground-secondary transition-colors duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 md:text-md"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link href="/contact">
            <button
              type="button"
              className="cursor-pointer rounded-3xl border border-border-light bg-primary px-6 py-2 text-sm font-semibold tracking-normal text-foreground shadow transition-all duration-300 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Contact
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute left-0 top-full z-10 flex w-full flex-col gap-6 border-b border-border bg-background px-6 py-8 text-sm text-foreground-secondary shadow-2xl md:text-lg lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <motion.div key={link.href} variants={linkVariants}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div variants={linkVariants}>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full">
                <button
                  type="button"
                  className="w-full rounded-2xl bg-primary px-6 py-2.5 font-semibold text-foreground shadow transition-colors duration-300 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  Contact
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;