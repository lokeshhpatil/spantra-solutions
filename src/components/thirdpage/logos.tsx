import Image from "next/image";

const Logos = () => {
  const logosNames = [
    {
      company: "google",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      company: "slack",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
    },
    {
      company: "facebook",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg",
    },
    {
      company: "airbnb",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    },
    {
      company: "shopify",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center items-center gap-10">
      {logosNames.map((item, index) => (
        <div
          key={index}
          className="relative w-32 h-12 flex justify-center items-center"
        >
          <Image
            src={item.logoUrl}
            alt={item.company}
            height={32}
            width={32}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Logos;
