"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
}

const Button = ({ text, href, variant = "primary", onClick }: ButtonProps) => {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all duration-300 font-bold uppercase tracking-widest text-[10px]";

  const variants = {
    primary: "bg-[#D9E31F] text-black cursor-pointer active:scale-95",
    secondary: "bg-black text-white hover:bg-zinc-900 active:scale-95",
    outline:
      "border border-black/10 text-black hover:border-black active:scale-95",
  };

  const className = `${baseStyles} ${variants[variant]}`;

  const Icon = (
    <div className="relative flex items-center justify-center w-8 h-8 bg-black rounded-full transition-transform duration-300 group-hover:translate-x-1">
      <ArrowRight color="#ffffff" size={16} />
    </div>
  );

  const content = (
    <>
      <span>{text}</span>
      {Icon}
    </>
  );

  const defaultHandleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    // If it's a "Contact Us" style button and no custom logic is provided
    if (!href || href === "#contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "/#contact");
    }
  };

  if (href && href !== "#contact") {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={defaultHandleClick} className={className}>
      {content}
    </button>
  );
};

export default Button;
