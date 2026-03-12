"use client"; // Required for useState
import { useState } from "react";
import Link from "next/link";
import Button from "./button";
import { Menu, X } from "lucide-react"; // Standard icons for mobile menus

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 md:px-6">
      <nav className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md border border-gray-100 rounded-[2rem] shadow-sm overflow-hidden">
        <div className="flex items-center justify-between py-2 pl-6 pr-2">
          {/* Logo */}
          <Link
            href="/"
            onClick={() =>
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2"
          >
            <span className="text-lg md:text-xl font-extrabold tracking-tighter text-slate-900">
              SPANTRA
            </span>
          </Link>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-black transition">
              Home
            </Link>
            <Link
              href="/#services"
              onClick={(e) => {
                const isHome = window.location.pathname === "/";
                if (isHome) {
                  e.preventDefault();
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                  window.history.pushState(null, "", "/#services");
                }
              }}
              className="hover:text-black transition cursor-pointer"
            >
              Services
            </Link>
            <Link
              href="/#articles"
              onClick={(e) => {
                const isHome = window.location.pathname === "/";
                if (isHome) {
                  e.preventDefault();
                  document
                    .getElementById("articles")
                    ?.scrollIntoView({ behavior: "smooth" });
                  window.history.pushState(null, "", "/#articles");
                }
              }}
              className="hover:text-black transition cursor-pointer"
            >
              Articles
            </Link>
            <Link
              href="/#about"
              onClick={(e) => {
                const isHome = window.location.pathname === "/";
                if (isHome) {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                  window.history.pushState(null, "", "/#about");
                }
              }}
              className="hover:text-black transition cursor-pointer"
            >
              About Us
            </Link>
          </div>

          {/* Right Side: CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Button text="Contact Us" variant="primary" />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4 text-slate-600 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link
              href="/#services"
              onClick={(e) => {
                setIsOpen(false);
                const isHome = window.location.pathname === "/";
                if (isHome) {
                  e.preventDefault();
                  // Small timeout ensures the mobile menu closes before smooth scrolling
                  setTimeout(() => {
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", "/#services");
                  }, 100);
                }
              }}
              className="cursor-pointer"
            >
              Services
            </Link>
            <Link
              href="/#articles"
              onClick={(e) => {
                setIsOpen(false);
                const isHome = window.location.pathname === "/";
                if (isHome) {
                  e.preventDefault();
                  setTimeout(() => {
                    document
                      .getElementById("articles")
                      ?.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", "/#articles");
                  }, 100);
                }
              }}
              className="cursor-pointer"
            >
              Articles
            </Link>
            <Link
              href="/#about"
              onClick={(e) => {
                setIsOpen(false);
                const isHome = window.location.pathname === "/";
                if (isHome) {
                  e.preventDefault();
                  setTimeout(() => {
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", "/#about");
                  }, 100);
                }
              }}
              className="cursor-pointer"
            >
              About Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
