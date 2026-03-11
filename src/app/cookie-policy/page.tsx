import React from "react";

export const metadata = {
  title: "Cookie Policy | Spantra Solutions",
  description: "Cookie Policy for Spantra Solutions",
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6 sm:px-12 lg:px-24 pt-32">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 shadow-sm rounded-3xl border border-slate-100">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Cookie Policy</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric", day: "numeric"})}</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. What are cookies?</h2>
          <p>
            Cookies are small text files that are used to store small pieces of information. The cookies are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make the website more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. How do we use cookies?</h2>
          <p>
            As most of the online services, our website uses cookies first-party and third-party cookies for a number of purposes. The first-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.
          </p>
          <p>
            The third-party cookies used on our websites are used mainly for understanding how the website performs, how you interact with our website, keeping our services secure, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. What types of cookies do we use?</h2>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Essential:</strong> Some cookies are essential for you to be able to experience the full functionality of our site. They allow us to maintain user sessions and prevent any security threats. They do not collect or store any personal information.</li>
            <li><strong>Statistics:</strong> These cookies store information like the number of visitors to the website, the number of unique visitors, which pages of the website have been visited, the source of the visit etc. These data help us understand and analyze how well the website performs and where it needs improvement.</li>
            <li><strong>Functional:</strong> These are the cookies that help certain non-essential functionalities on our website. These functionalities include embedding content like videos or sharing contents on the website on social media platforms.</li>
            <li><strong>Preferences:</strong> These cookies help us store your settings and browsing preferences like language preferences so that you have a better and efficient experience on future visits to the website.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. How can you control the cookie preferences?</h2>
          <p>
            Should you decide to change your preferences later through your browsing session, you can find the cookie settings in your browser. Different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies. To find out more out more on how to manage and delete cookies, visit wikipedia.org, www.allaboutcookies.org.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have questions or comments about this notice, you may email us at hello@spantrasolutions.com.
          </p>
        </div>
      </div>
    </div>
  );
}
