import {
  UserRound,
  MessageCircleMore,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const SpantraModels = [
  {
    title: "Process Model",
    description:
      "A clear, step-by-step workflow with defined SOPs and a Maker-Checker system for smooth task movement.",
    icon: <UserRound size={20} className="text-slate-600" />,
  },
  {
    title: "Accuracy Model",
    description:
      "We follow a strict process to maintain 99%+ accuracy through double verification and real-time checks.",
    icon: <ShieldCheck size={20} className="text-slate-600" />,
  },
  {
    title: "Scalability Model",
    description:
      "Increase team size quickly whenever your work volume increases with our flexible expansion options.",
    icon: <TrendingUp size={20} className="text-slate-600" />,
  },
  {
    title: "Confidentiality Model",
    description:
      "Data protection at every stage with authorized access and secure, encrypted handling systems.",
    icon: <MessageCircleMore size={20} className="text-slate-600" />,
  },
];

const SecondPage = () => {
  return (
    <section className="flex-1 bg-[#F3F4EF] py-24 px-6 md:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {/* <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#084127] opacity-88 tracking-tighter">
            We strongly believe in providing <br className="hidden md:block" />
            perfect service to our customers.
          </h2>
        </div> */}

        {/* The Grid: 1 column on mobile, 2 on tablets, 3 on large screens */}
        {/* This prevents the "collapsing" issue by defining strict tracks */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {SpantraModels.map((model, index) => (
            <div key={index} className="flex flex-col items-start group">
              {/* Icon Circle */}
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border border-slate-200 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                {model.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold mt-5 text-[#084127] tracking-tight">
                {model.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed text-lg max-w-sm">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
