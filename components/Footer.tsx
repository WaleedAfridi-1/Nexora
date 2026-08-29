import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border/60">
      <div className="max-w-7xl mx-auto flex flex-col px-4 md:px-8 lg:px-12 py-16 md:py-20">
        {/* Top Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-border/60">
          
          {/* Brand & Socials (Span 6) */}
          <div className="w-full md:col-span-6 flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full bg-foreground flex items-center justify-center overflow-hidden">
                <Image src={"/logo.png"} fill alt="Nexora" className="object-cover" />
              </div>
              <h4 className="text-xl md:text-2xl font-black text-foreground tracking-tight">
                Nexora
              </h4>
            </div>

            <p className="text-sm md:text-base font-medium text-foreground-secondary leading-relaxed max-w-sm">
              Build better workflows. Move faster with automated precision and seamless integrations.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-card hover:bg-card-hover border border-border/60 text-foreground transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-card hover:bg-card-hover border border-border/60 text-foreground transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4 text-blue-500" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-card hover:bg-card-hover border border-border/60 text-foreground transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
                aria-label="Twitter X"
              >
                <BsTwitterX className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Navigation Links Columns (Span 6) */}
          <div className="w-full md:col-span-6 grid grid-cols-2 gap-8 text-left">
            {/* Product Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-foreground font-mono font-bold text-xs tracking-widest uppercase">
                Product
              </h4>
              <div className="flex flex-col gap-3">
                <Link href="#features" className="text-foreground-secondary text-sm font-medium hover:text-primary transition-colors duration-200">
                  Features
                </Link>
                <Link href="#integration" className="text-foreground-secondary text-sm font-medium hover:text-primary transition-colors duration-200">
                  Integrations
                </Link>
                <Link href="#pricing" className="text-foreground-secondary text-sm font-medium hover:text-primary transition-colors duration-200">
                  Pricing
                </Link>
                <Link href="#faqs" className="text-foreground-secondary text-sm font-medium hover:text-primary transition-colors duration-200">
                  FAQ
                </Link>
              </div>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-foreground font-mono font-bold text-xs tracking-widest uppercase">
                Company
              </h4>
              <div className="flex flex-col gap-3">
                <Link href="#" className="text-foreground-secondary text-sm font-medium hover:text-primary transition-colors duration-200">
                  About
                </Link>
                <Link href="#" className="text-foreground-secondary text-sm font-medium hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
                <Link href="#" className="text-foreground-secondary text-sm font-medium hover:text-primary transition-colors duration-200">
                  Careers
                </Link>
                <Link href="#" className="text-foreground-secondary text-sm font-medium hover:text-primary transition-colors duration-200">
                  Changelog
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="w-full pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs md:text-sm text-foreground-secondary font-medium">
            © {new Date().getFullYear()} Nexora. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs md:text-sm">
            <Link
              href="/privacy-policy"
              className="text-foreground-secondary transition-colors duration-200 hover:text-foreground hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>

            <span className="text-border" aria-hidden="true">
              •
            </span>

            <Link
              href="/terms"
              className="text-foreground-secondary transition-colors duration-200 hover:text-foreground hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;