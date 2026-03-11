import React from "react";
import Link from "next/link";
import { ArrowRight, Target, Users, Zap } from "lucide-react";

export const metadata = {
  title: "About Us | Spantra Solutions",
  description: "Learn more about Spantra Solutions",
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative isolate pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 bg-slate-50 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
              Empowering Businesses with <span className="text-emerald-600">Innovation</span>
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              Spantra Solutions is dedicated to delivering cutting-edge software solutions that drive growth, streamline operations, and elevate digital experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-emerald-600">Our Core Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What drives us forward
            </p>
          </div>
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col items-start bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="rounded-xl bg-emerald-100 p-3 mb-6">
                  <Target className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                </div>
                <dt className="text-xl font-bold leading-7 text-gray-900 mb-4">
                  Excellence
                </dt>
                <dd className="leading-7 text-gray-600 flex-auto">
                  We strive for excellence in everything we do, delivering high-quality, robust, and scalable solutions that exceed expectations.
                </dd>
              </div>
              
              <div className="flex flex-col items-start bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="rounded-xl bg-emerald-100 p-3 mb-6">
                  <Users className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                </div>
                <dt className="text-xl font-bold leading-7 text-gray-900 mb-4">
                  Collaboration
                </dt>
                <dd className="leading-7 text-gray-600 flex-auto">
                  We believe in strong partnerships with our clients, acting as an extension of their team to achieve mutual success.
                </dd>
              </div>

              <div className="flex flex-col items-start bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="rounded-xl bg-emerald-100 p-3 mb-6">
                  <Zap className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                </div>
                <dt className="text-xl font-bold leading-7 text-gray-900 mb-4">
                  Innovation
                </dt>
                <dd className="leading-7 text-gray-600 flex-auto">
                  We leverage the latest technologies and methodologies to solve complex problems and create forward-thinking solutions.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-slate-900 py-24 sm:py-32 rounded-[3rem] mx-4 md:mx-10 mb-20 text-center">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to start your next project?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Let&apos;s turn your vision into reality. We&apos;re here to help you navigate the digital landscape.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/#contact"
              className="rounded-full bg-[#d4ff36] px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-[#bceb16] transition-colors flex items-center gap-2 group"
            >
              Contact Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
