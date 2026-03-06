import Image from "next/image";

const SecondPart = () => {
  return (
    /* On mobile: We give it a specific height (h-[300px] or h-[400px]) 
       On desktop (md:): we use flex-1 and relative to let it fill the 50% side
    */
    <div className="relative w-full h-[300px] md:h-auto md:flex-1 bg-[#F3F4EF]">
      <Image
        src="/assets/landing-image.jpg"
        alt="Spantra Solutions Team working on Data Services"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Optional: Add a subtle overlay so the image looks more "premium" */}
      <div className="absolute inset-0 bg-black/5 md:bg-transparent" />
    </div>
  );
};

export default SecondPart;
