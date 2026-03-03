import React from "react";
import Card from "./Card";

const RightContent = () => {

  const cardsData = [
    {
      number: 1,
      image: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=987&auto=format&fit=crop",
      para: "Prime customers, that have access to bank credit and are satisfied with the current product",
      buttonText: "Satisfied",
      buttonColor: "bg-blue-500"
    },
    {
      number: 2,
      image: "https://images.unsplash.com/photo-1601342630314-8427c38bf5e6?q=80&w=991&auto=format&fit=crop",
      para: "Prime customers, that have access to bank credit and are not satisfied with the current service",
      buttonText: "Underserved",
      buttonColor: "bg-amber-700"
    },
    {
      number: 3,
      image: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=988&auto=format&fit=crop",
      para: "Customers from near-prime and sub-prime segments with no access to bank credit",
      buttonText: "Underbanked",
      buttonColor: "bg-lime-400 text-black"
    },
    {
      number: 4,
      image: "https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=987&auto=format&fit=crop",
      para: "Hello This is my 4th card content im learning react this is mini project for react props",
      buttonText: "LetsGo",
      buttonColor: "bg-purple-500"
    }
  ];

  return (
    <div className="w-[70%] overflow-x-auto">
      
      <div className="flex gap-6 px-6">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

    </div>
  );
};

export default RightContent;