import { Sparkle } from "lucide-react";

const Heading = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
      <Sparkle
        color="#0A3321"
        size={48}
        strokeWidth={1}
        className="lg:w-[60px] lg:h-[60px]"
      />
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#0A3321] font-semibold mt-6 mb-6 lg:mt-10 lg:mb-10 leading-tight">
        Words From
        <br className="hidden lg:block" /> Clients
      </h1>
      <Sparkle color="#0A3321" className="hidden lg:block" />
      <hr className="border-t border-gray-300 my-4 lg:my-8 w-1/2 lg:w-full max-w-sm" />
    </div>
  );
};

export default Heading;
