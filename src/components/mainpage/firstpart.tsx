import Button from "../common/button";

const FirstPart = () => {
  return (
    // 'min-h-screen' ensures the background covers the full view
    // 'flex flex-col' allows us to use 'mt-auto' for the stats later
    <div className="flex flex-col min-h-screen bg-[#F3F4EF] text-black">
      {/* Content Container: Responsive padding and alignment */}
      <div className="px-6 md:px-20 pt-32 md:pt-48 max-w-7xl">
        {/* Responsive Heading: 7xl is huge on mobile, so we scale it */}
        <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-tight tracking-tighter">
          Your Trusted Partner <br className="hidden md:block" />
          in Data Services
        </h1>

        {/* Responsive Paragraph: Adjusting width so it doesn't stretch too far */}
        <p className="text-slate-600 mt-6 md:mt-10 text-lg md:text-xl max-w-2xl leading-relaxed">
          Reduce workload and operational costs through our expert data
          cleaning, formatting, and secure back-office support.
        </p>

        {/* Button: Spacing adjusted for thumb-reach on mobile */}
        <div className="mt-10 md:mt-12">
          <Button text="Book a Free Call" variant="primary" />
        </div>
      </div>

      {/* Stats Section: Using flex-col on mobile, flex-row on desktop */}
      <div className="mt-auto px-6 md:px-20 pb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 border-t border-gray-200 pt-10">
          {/* Stat 1: Accuracy Rate */}
          <div className="flex flex-col border-l-2 border-[#D9E31F] pl-4">
            <span className="text-3xl font-bold text-slate-900">99%+</span>
            <span className="text-sm text-slate-500 font-medium">
              Accuracy Rate
            </span>
          </div>

          {/* Stat 2: Ops Support */}
          <div className="flex flex-col border-l-2 border-[#D9E31F] pl-4">
            <span className="text-3xl font-bold text-slate-900">24/7</span>
            <span className="text-sm text-slate-500 font-medium">
              Ops Support
            </span>
          </div>

          {/* Stat 3: Industries */}
          <div className="flex flex-col border-l-2 border-[#D9E31F] pl-4">
            <span className="text-3xl font-bold text-slate-900">10+</span>
            <span className="text-sm text-slate-500 font-medium">
              Industries
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
