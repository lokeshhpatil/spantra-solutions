import Image from "next/image";
import { Target, Users, Zap } from "lucide-react";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "10+", label: "Industries Served" },
  { value: "99%", label: "Client Retention" },
];

const highlights = [
  {
    icon: <Target color="#084127" className="h-5 w-5" />,
    title: "Mission-Driven",
    desc: "We focus on delivering measurable results that align with your business goals.",
  },
  {
    icon: <Users color="#084127" className="h-5 w-5" />,
    title: "Client-Centric",
    desc: "Your success is our success — we act as an extension of your team.",
  },
  {
    icon: <Zap color="#084127" className="h-5 w-5" />,
    title: "Tech-Forward",
    desc: "Leveraging the latest technologies to build future-proof solutions.",
  },
];

export default function AboutUsSection() {
  return (
    <section id="about" className="relative bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column – Heading & Highlights */}
          <div className="space-y-8">
            <div>
              <span className="inline-block bg-[#e4fc54] text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-6 leading-tight">
                Who We Are &<br />
                <span>What We Stand For</span>
              </h2>
              <p className="mt-5 text-base text-slate-500 leading-relaxed max-w-lg">
                Spantra Solutions is a team of passionate technologists and
                strategists committed to transforming businesses through
                innovation, precision, and relentless dedication.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="space-y-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl text-#e4fc54">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column – Image & Paragraph + Stats */}
          <div className="space-y-8">
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-4/3">
              <Image
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                alt="Spantra Solutions team collaborating"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 from-slate-900/40 via-transparent to-transparent" />
            </div>

            {/* Paragraph */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <p className="text-slate-600 leading-relaxed text-sm">
                Founded with a vision to bridge the gap between business needs
                and technology, Spantra Solutions has grown into a trusted
                partner for organizations across the globe. We specialize in
                data services, digital transformation, and custom software
                development — delivering solutions that are not only technically
                robust but also strategically aligned with your long-term
                objectives.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <p className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
