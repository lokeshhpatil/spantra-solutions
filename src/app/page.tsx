import Navbar from "@/components/common/navbar";
import FirstPart from "@/components/mainpage/firstpart";
import SecondPart from "@/components/mainpage/secondpart";
import Firstpage from "@/components/secondpage/firstpage";
import Secondpage from "@/components/secondpage/secondpage";
import Services from "@/components/thirdpage/services";
import Industries from "@/components/thirdpage/industries";

export default function Home() {
  return (
    <div>
      {/* Hero Section takes remaining viewport height minus navbar (80px) */}
      <Navbar />
      <div className="flex flex-col lg:flex-row min-h-screen">
        <FirstPart />
        <SecondPart />
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen bg-black">
        <Firstpage />
        <Secondpage />
      </div>

      {/* Third Form */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        <Services />
        <Industries />
      </div>
    </div>
  );
}
