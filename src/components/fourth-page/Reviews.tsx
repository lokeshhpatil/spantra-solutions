const Reviews = () => {
  const reviewsList = [
    {
      author: "Shubham Patil",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores odio architecto cumque optio ex provident voluptate dolore excepturi facilis distinctio deleniti, eos commodi placeat reiciendis!",
    },
    {
      author: "Lokesh Patil",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores odio architecto cumque optio ex provident voluptate dolore excepturi facilis distinctio deleniti, eos commodi placeat reiciendis!",
    },
    {
      author: "Manish Deore",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores odio architecto cumque optio ex provident voluptate dolore excepturi facilis distinctio deleniti, eos commodi placeat reiciendis!",
    },
    {
      author: "Sushant Deore",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores odio architecto cumque optio ex provident voluptate dolore excepturi facilis distinctio deleniti, eos commodi placeat reiciendis!",
    },
    {
      author: "Pratik Patil",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores odio architecto cumque optio ex provident voluptate dolore excepturi facilis distinctio deleniti, eos commodi placeat reiciendis!",
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
