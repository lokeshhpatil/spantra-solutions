import Image from "next/image";
import Navbar from "@/components/common/navbar";
import FirstPart from "@/components/mainpage/firstpart";
import SecondPart from "@/components/mainpage/secondpart";
import Firstpage from "@/components/secondpage/firstpage";
import Secondpage from "@/components/secondpage/secondpage";
export default function Home() {
  return (
    <div>
      {/* Hero Section takes remaining viewport height minus navbar (80px) */}
      <Navbar />
      <div className="flex flex-row h-screen">
        <FirstPart />
        <SecondPart />
      </div>

      <div className="flex h-screen bg-black">
        <Firstpage />
        <Secondpage />
      </div>
    </div>
  );
}
