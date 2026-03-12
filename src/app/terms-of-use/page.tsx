import React from "react";

export const metadata = {
  title: "Terms of Use | Spantra Solutions",
  description: "Terms of Use for Spantra Solutions",
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6 sm:px-12 lg:px-24 pt-32">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 shadow-sm rounded-3xl border border-slate-100">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Terms of Use
        </h1>

        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p className="text-sm text-slate-500">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
              day: "numeric",
            })}
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            1. Agreement to Terms
          </h2>
          <p>
            These Terms of Use constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity
            (&quot;you&quot;) and Spantra Solutions (&quot;Company,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), concerning your
            access to and use of our website as well as any other media form,
            media channel, mobile website or mobile application related, linked,
            or otherwise connected thereto (collectively, the &quot;Site&quot;).
          </p>
          <p>
            You agree that by accessing the Site, you have read, understood, and
            agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE
            WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED
            FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            2. Intellectual Property Rights
          </h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and
            all source code, databases, functionality, software, website
            designs, audio, video, text, photographs, and graphics on the Site
            (collectively, the &quot;Content&quot;) and the trademarks, service
            marks, and logos contained therein (the &quot;Marks&quot;) are owned
            or controlled by us or licensed to us, and are protected by
            copyright and trademark laws.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            3. User Representations
          </h2>
          <p>
            By using the Site, you represent and warrant that: (1) you have the
            legal capacity and you agree to comply with these Terms of Use; (2)
            you are not a minor in the jurisdiction in which you reside; (3) you
            will not access the Site through automated or non-human means,
            whether through a bot, script, or otherwise; (4) you will not use
            the Site for any illegal or unauthorized purpose.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            4. Prohibited Activities
          </h2>
          <p>
            You may not access or use the Site for any purpose other than that
            for which we make the Site available. The Site may not be used in
            connection with any commercial endeavors except those that are
            specifically endorsed or approved by us.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            5. Modifications and Interruptions
          </h2>
          <p>
            We reserve the right to change, modify, or remove the contents of
            the Site at any time or for any reason at our sole discretion
            without notice. However, we have no obligation to update any
            information on our Site. We will not be liable to you or any third
            party for any modification, price change, suspension, or
            discontinuance of the Site.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            6. Contact Us
          </h2>
          <p>
            In order to resolve a complaint regarding the Site or to receive
            further information regarding use of the Site, please contact us at:
            support@spantra.net
          </p>
        </div>
      </div>
    </div>
  );
}
