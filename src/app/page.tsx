import Navbar from "@/components/common/navbar";
import FirstPart from "@/components/mainpage/firstpart";
import SecondPart from "@/components/mainpage/secondpart";
import Firstpage from "@/components/secondpage/firstpage";
import Secondpage from "@/components/secondpage/secondpage";
import Services from "@/components/thirdpage/services";
import Industries from "@/components/thirdpage/industries";
import Heading from "@/components/fourth-page/heading";
import Reviews from "@/components/fourth-page/Reviews";
// import Testimonials from "@/components/fourth-page/testimonials";

export default function Home() {
  return (
    <div>
      {/* Hero Section takes remaining viewport height minus navbar (80px) */}
      <Navbar />
      <div className="flex flex-col lg:flex-row min-h-screen">
        <FirstPart />
        <SecondPart />
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        <Firstpage />
        <Secondpage />
      </div>

      {/* Third Form */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        <Services />
        <Industries />
      </div>

      {/* Fourth Form */}
      <div className="flex flex-col lg:flex-row min-h-[70vh] items-center px-6 md:px-12 lg:px-20 py-20 gap-10 lg:gap-20 bg-gray-50">
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <Heading />
        </div>
        <div className="w-full lg:w-2/3">
          <Reviews />
        </div>
      </div>
    </div>
  );
}
