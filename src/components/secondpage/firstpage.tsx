import Button from "../common/button";

const firstpage = () => {
  return (
    <div className="flex-1 bg-[#F3F4EF] text-black">
      <h1 className="text-7xl font-semibold px-20 pt-32 text-[#084127]">
        15k+ clients base & growing
      </h1>
      <p className="text-gray-700 px-20 pt-10 text-lg">
        Your success is our mission. As business advisors, we offer expert
        guidance. unlocking your potential for growth and profitability
      </p>
      <div className="px-20 py-10">
        <Button text="Book a Free Call" variant="primary" />
      </div>
    </div>
  );
};

export default firstpage;
