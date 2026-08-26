import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col  px-4 md:px-8 lg:px-12 py-10 bg-background">
      <div className="w-full py-6 px-1 flex flex-col md:flex-row border-b border-border-light">
        <div className="w-full  md:w-1/2 flex flex-col gap-4 px-6">
          <div className="relative flex w-8 h-8 rounded-full bg-foreground items-center">
            <Image src={"/logo.png"} fill alt="Nexora" />
            <h4 className="text-xl md:text-2xl font-bold absolute left-12">
              Nexora
            </h4>
          </div>

          <div className="px-2">
            <p className="text-sm font-medium text-foreground-muted">
              Build better workflows.{" "}
              <span className="block pl-8">Move faster. </span>{" "}
            </p>
          </div>
          <div className="w-full h-32  flex items-center gap-8 ">
            <FaGithub className="w-6 h-6 cursor-pointer active:scale-95 transition-all duration-300 ease-in-out" />
            <FaLinkedin className="w-6 h-6 text-blue-500 cursor-pointer active:scale-95 transition-all duration-300 ease-in-out" />
            <BsTwitterX className="w-4 h-4 cursor-pointer active:scale-95 transition-all duration-300 ease-in-out" />
          </div>
        </div>

        <div className="w-full md:w-1/2  grid text-center grid-cols-2 px-4 py-2">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-foreground font-bold text-base ">PRODUCT</h1>
            <Link
              href={"#"}
              className="text-foreground-muted text-base hover:text-foreground-secondary"
            >
              Features
            </Link>
            <Link
              href={"#"}
              className="text-foreground-muted text-base hover:text-foreground-secondary"
            >
              Integrations
            </Link>
            <Link
              href={"#"}
              className="text-foreground-muted text-base hover:text-foreground-secondary"
            >
              Pricing
            </Link>
            <Link
              href={"#"}
              className="text-foreground-muted text-base hover:text-foreground-secondary"
            >
              FAQ
            </Link>
          </div>
          <div className="flex flex-col gap-4 ">
            <h1 className="text-foreground font-bold text-base ">COMPANY</h1>
            <Link
              href={"#"}
              className="text-foreground-muted text-base hover:text-foreground-secondary"
            >
              About
            </Link>
            <Link
              href={"#"}
              className="text-foreground-muted text-base hover:text-foreground-secondary"
            >
              Contact{" "}
            </Link>
            <Link
              href={"#"}
              className="text-foreground-muted text-base hover:text-foreground-secondary"
            >
              Careers
            </Link>
            <Link
              href={"#"}
              className="text-foreground-muted text-base hover:text-foreground-secondary"
            >
              Changelog
            </Link>
          </div>

          <div></div>
        </div>
      </div>

      <div className="w-full  py-8 px-10  flex justify-between items-center">
        <div>
          <p className="cursor-pointer text-sm text-foreground-muted hover:text-foreground-secondary">
            © 2026 Nexora
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/privacy-policy"
            className="text-muted-foreground transition-colors duration-200 hover:text-foreground hover:underline underline-offset-4"
          >
            Privacy Policy
          </Link>

          <span className="text-border" aria-hidden="true">
            •
          </span>

          <Link
            href="/terms"
            className="text-muted-foreground transition-colors duration-200 hover:text-foreground hover:underline underline-offset-4"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
