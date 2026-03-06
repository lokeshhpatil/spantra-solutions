import Link from "next/link";
import Button from "./button";

const Navbar = () => {
  return (
    // 'fixed' or 'absolute' lets it float. 'z-50' keeps it on top of images.
    <header className="fixed top-4 inset-x-0 z-50 px-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md border border-gray-100 py-1 pl-8 pr-2 rounded-full shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Add your Spantra Logo icon here if you have one */}
          <span className="text-xl font-extrabold tracking-tighter text-slate-900">
            SPANTRA
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
          <Link href="/services" className="hover:text-black transition">
            Services
          </Link>
          <Link href="/about" className="hover:text-black transition">
            About Us
          </Link>
          <Link href="/blog" className="hover:text-black transition">
            Blog
          </Link>
        </div>

        {/* Action Button */}
        <div className="bg-red-500 rounded-full">
          <Button text="Book a Free Call" variant="primary" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
