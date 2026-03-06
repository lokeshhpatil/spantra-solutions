import Link from "next/link";
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  text: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
}
const button = ({ text, href, variant = 'primary', onClick }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300";
  
  const variants = {
    primary: "bg-[#D9E31F] text-black hover:bg-black hover:text-white",
    secondary: "bg-black text-white hover:bg-gray-800",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white"
  };

  const className = `${baseStyles} ${variants[variant]}`;
  const Icon = <ArrowRight color="#ffffff" size={32} className="bg-black p-1.5 rounded-full ml-3" />;

  if (href) {
    return (
      <Link href={href} className={className}>
        <span>{text}</span>
        {Icon}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={className}>
      <span>{text}</span>
      {Icon}
    </button>
  );
};


export default button