import React from "react";

export const metadata = {
  title: "Privacy Policy | Spantra Solutions",
  description: "Privacy Policy for Spantra Solutions",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6 sm:px-12 lg:px-24 pt-32">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 shadow-sm rounded-3xl border border-slate-100">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric", day: "numeric"})}</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to Spantra Solutions (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at hello@spantrasolutions.com.
          </p>
          <p>
            When you visit our website, and more generally, use any of our services, we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <p>
            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>To respond to user inquiries and offer support to users.</li>
            <li>To send administrative information to you.</li>
            <li>To fulfill and manage your requests.</li>
            <li>To protect our Services.</li>
            <li>To enforce our terms, conditions, and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. How Long Do We Keep Your Information?</h2>
          <p>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Contact Us</h2>
          <p>
            If you have questions or comments about this notice, you may email us at hello@spantrasolutions.com.
          </p>
        </div>
      </div>
    </div>
  );
}
