"use client";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white relative">
      {/* Top CTA Banner */}
      <div className="relative isolate overflow-hidden bg-emerald-900 border-t-2 border-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-left text-white">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Want to Chat? Feel free to Contact our Team.
            </h2>
            <p className="mt-6 text-lg leading-8 text-emerald-100">
              If you have anything in mind just contact us with our expert.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/#contact"
              className="relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#d4ff36] text-slate-900 hover:scale-105 transition-transform duration-300 group"
            >
              <div className="absolute w-[80%] h-[80%] border-[0.5px] border-slate-900/20 rounded-full pointer-events-none"></div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-center mb-1">
                  Get a<br />
                  Quote
                </span>
                <ArrowUpRight
                  strokeWidth={1.5}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tighter text-slate-900 flex items-center gap-1">
                SPANTRA
                <Sparkles className="text-[#d4ff36] fill-[#d4ff36]" size={20} />
              </span>
            </Link>
            <div className="text-sm leading-6 text-slate-600">
              <p>support@spantra.net</p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-slate-900">
                  Links
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/"
                      className="text-sm leading-6 text-slate-600 hover:text-slate-900"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    {/* services */}
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
                      className="text-sm leading-6 text-slate-600 hover:text-slate-900"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    {/* articles */}
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
                      className="text-sm leading-6 text-slate-600 hover:text-slate-900"
                    >
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-sm leading-6 text-slate-600 hover:text-slate-900"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contact"
                      className="text-sm leading-6 text-slate-600 hover:text-slate-900"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-slate-900">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/terms-of-use"
                      className="text-sm leading-6 text-slate-600 hover:text-slate-900"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-sm leading-6 text-slate-600 hover:text-slate-900"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cookie-policy"
                      className="text-sm leading-6 text-slate-600 hover:text-slate-900"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="bg-emerald-900 w-full h-full rounded-full"></h2>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-slate-900/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs leading-5 text-slate-500">
            &copy; {new Date().getFullYear()} Spantra Solutions. All rights
            reserved.
          </p>

          <div className="flex gap-x-6 text-xs text-slate-500 font-medium">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-900 transition"
            >
              Privacy & Terms
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:text-slate-900 transition"
            >
              Cookies.
            </Link>
            <Link href="/#contact" className="hover:text-slate-900 transition">
              Contact Us
            </Link>
          </div>

          <div className="flex space-x-6">
            <span className="text-slate-400 hover:text-slate-500 cursor-pointer">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </span>
            <span className="text-slate-400 hover:text-slate-500 cursor-pointer">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </span>
            <span className="text-slate-400 hover:text-slate-500 cursor-pointer">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </span>
            <span className="text-slate-400 hover:text-slate-500 cursor-pointer">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
