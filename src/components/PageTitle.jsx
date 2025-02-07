import React from "react";
import { FaUtensils } from "react-icons/fa";
import "./page.css";
const PageTitle = ({ title, desc }) => {
  return (
    <div className="relative w-full back bg-no-repeat bg-cover  py-5">
      <div className="absolute inset-0 bg-opacity-30 bg-black"></div>
      <div className="relative flex flex-col items-center text-center text-white">
        <FaUtensils size={40} className="mb-2" />
        <h1 className="text-4xl font-bold uppercase">{title}</h1>
        <p className="text-lg mt-2">{desc}</p>
      </div>
    </div>
  );
};

export default PageTitle;
