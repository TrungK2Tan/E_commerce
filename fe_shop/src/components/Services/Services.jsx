import React from "react";
import { FaCarSide, FaCheck, FaHeadphones, FaWallet } from "react-icons/fa6";
const ServicesData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free Shipping On All Order",
  },
  {
    id: 2,
    icon: <FaCheck className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphones className="text-4xl md:text-5xl text-primary" />,
    title: "Online Support 24/7",
    description: "Technical Suppoer 24/7",
  },
];
const Services = () => {
  return (
    <div className="container my-14 md:my-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
        {ServicesData.map((data) => (
          <div key={data.id} className="flex flex-col items-start sm:flex-row gap-4">
            <div className="mr-4">{data.icon}</div>
            <div>
              <h1 className="font-bold lg:text-xl">{data.title}</h1>
              <h3 className="text-sm text-gray-400">{data.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
