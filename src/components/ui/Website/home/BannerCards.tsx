/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react"

interface Data {
  icon: string 
  title: string;
  description: string;
}

const BannerCards: React.FC = () => {
  const datas: Data[] = [
    {
      icon: "/img1.png",
      title: "Choose your preferred treatment",
      description:
        "Learn about the options and choose a treatment that suits your needs.",
    },
    {
      icon: "/img2.png",
      title: "Consultation by means of a medical questionnaire",
      description:
        "A doctor will assess your questionnaire and check whether the treatment you prefer is suitable.",
    },
    {
      icon: "/img3.png",
      title: "We look with you",
      description:
        "We collaborate with you to explore your needs and options. Video consultation is possible!",
    },
    {
      icon:  "/img4.png",
      title: "Easily delivered to your home",
      description:
        "Our original medication will be shipped from one of the EU pharmacies we have access to, directly per express to your home within 24 hours.",
    },
  ];

  return (
    <section className="lg:-mt-24 -mt-16 z-20 mb-[94px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {datas.map((data, index) => (
          <div
            key={index}
            className="text-center  px-7 flex flex-col items-center justify-center border  shadow-md bg-[#F5F8FF] "
          >
            <img src={data?.icon}   className="my-4"/>
            <h3 className="text-[16px] font-semibold mb-2 text-[#4E4E4E]">{data.title}</h3>
            <p className="text-sm text-[#999999] py-4">{data.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerCards;
