const Reviews = () => {
  const reviewsList = [
    {
      author: "James Harrington",
      text: "Spantra Solutions transformed our data workflow. Their team is incredibly precise, and the turnaround time exceeded our expectations for our London-based operations.",
    },
    {
      author: "Sarah McAllister",
      text: "Exceptional attention to detail. We outsourced our CRM cleanup to them, and the results were flawless. A truly reliable partner for any growing US business.",
    },
    {
      author: "Dr. Klaus Schmidt",
      text: "Professional, communicative, and highly efficient. They handled our complex document indexing with great care. I highly recommend their managed services.",
    },
    {
      author: "Elena Rodriguez",
      text: "Finding a partner that understands scalability is hard. Spantra made our expansion into digital data management seamless and cost-effective.",
    },
    {
      author: "Robert Chen",
      text: "The quality of work is world-class. They don't just enter data; they ensure the integrity of your business information. Simply the best in the industry.",
    },
  ];

  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory w-full pb-4 scroll-smooth">
      {reviewsList.map((rev, idx) => {
        return (
          <div
            key={idx}
            className="flex-none w-full snap-center p-6 border rounded-xl shadow-sm bg-white mx-2"
          >
            <p className="text-gray-600 leading-relaxed italic text-sm md:text-xl">
              &quot;{rev.text}&quot;
            </p>
            <br />
            <h3 className="font-bold text-black md:text-black mb-2">
              {rev.author}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
