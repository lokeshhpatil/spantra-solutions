"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { submitContactForm } from "../../app/actions/contact";

export default function ContactSection() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  async function handleFormSubmit(formData: FormData) {
    setIsPending(true);
    setStatus({ type: null, message: "" }); // Reset status

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setStatus({
          type: "success",
          message: "Inquiry sent successfully",
        });
        formRef.current?.reset(); // Clear form on success
      } else {
        setStatus({
          type: "error",
          message: "Failed to send. Please try again.",
        });
      }
    } catch (error) {
      console.log(error);
      setStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsPending(false);
      // Automatically hide the message after 5 seconds
      setTimeout(() => setStatus({ type: null, message: "" }), 5000);
    }
  }

  return (
    <section
      id="contact"
      className="py-10 md:py-32 bg-white px-6 md:px-12 lg:px-20 font-sans relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* CUSTOM NOTIFICATION POPUP */}
        {status.type && (
          <div
            className={`fixed bottom-10 right-10 z-50 px-6 py-4 rounded-2xl shadow-2xl transition-all duration-500 animate-bounce-subtle ${
              status.type === "success"
                ? "bg-black text-white"
                : "bg-red-600 text-white"
            }`}
          >
            <p className="text-sm font-bold tracking-wide flex items-center gap-3">
              {status.type === "success" ? "✓" : "✕"} {status.message}
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div>
              <Image
                src="https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg"
                alt="Contact Spantra Solutions"
                width={500}
                height={500}
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <span className="bg-[#e4fc54] text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                Let&apos;s discuss
              </span>
              <h2 className="text-4xl md:text-5xl font-medium mt-6 tracking-tight text-gray-900 leading-tight">
                Discuss your next <br /> big project.
              </h2>
            </div>

            <form
              ref={formRef}
              action={handleFormSubmit}
              className="space-y-8 mt-5"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="border-b border-gray-300 focus-within:border-[#e4fc54] transition-colors py-2">
                  <label className="text-[10px] font-bold text-gray-900 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-transparent outline-none text-gray-900 py-1"
                  />
                </div>
                <div className="border-b border-gray-300 focus-within:border-[#e4fc54] transition-colors py-2">
                  <label className="text-[10px] font-bold text-gray-900 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-transparent outline-none text-gray-900 py-1"
                  />
                </div>
              </div>

              <div className="border-b border-gray-300 focus-within:border-[#e4fc54] transition-colors py-2 relative">
                <label className="text-[10px] font-bold text-gray-900 uppercase tracking-wider">
                  Service Interest
                </label>
                <select
                  name="service"
                  className="w-full bg-transparent outline-none text-gray-900 py-1 appearance-none cursor-pointer"
                >
                  <option>Data Entry & Operations</option>
                  <option>Document Indexing</option>
                  <option>CRM Updates</option>
                  <option>Other Services</option>
                </select>
                <span className="absolute right-0 bottom-3 text-gray-400 pointer-events-none">
                  ↓
                </span>
              </div>

              <div className="border-b border-gray-300 focus-within:border-[#e4fc54] transition-colors py-2">
                <label className="text-[10px] font-bold text-gray-900 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={2}
                  required
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-transparent outline-none text-gray-900 py-1 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className={`group relative w-full py-4 font-bold rounded-full overflow-hidden transition-all duration-300 active:scale-90 cursor-pointer ${
                  isPending
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black text-white"
                }`}
              >
                {!isPending && (
                  <div className="absolute inset-0 bg-[#D9E31F] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                )}

                <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-black transition-colors duration-300 uppercase tracking-widest text-xs">
                  {isPending ? "Sending..." : "Send Inquiry"}
                  {!isPending && (
                    <span className="text-[#D9E31F] group-hover:text-black transition-colors duration-300 text-lg">
                      →
                    </span>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
