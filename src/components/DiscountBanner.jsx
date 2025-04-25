import React from "react";
import { BsFillCartFill } from "react-icons/bs"; // Example icon, choose as needed
import banner from "../../src/assets/banner.jpg";
import { Link } from "react-router-dom";
const DiscountBanner = () => {
  return (
    <div className=" py-8 my-14 bg-banner bg-no-repeat bg-cover bg-red-100 rounded-lg">
      {" "}
      {/* Slightly off-white background */}
      <div className="max-w-md mx-auto text-center">
        {" "}
        {/* Limit width for larger screens */}
        <h2 className=" bg-white/10 rounded-lg text-2xl font-bold text-red-700 mb-4">
          {" "}
          {/* Red heading */}
          Savor the Flavor for Less
        </h2>
        <p className="text-gray-700 mb-6 text-white">
          Use the discount code below to get 50% off from your next order!
        </p>
        <div className="bg-white rounded-lg p-6 shadow-md flex items-center justify-between">
          {" "}
          {/* White card with shadow */}
          <div>
            <p className="text-lg font-medium text-red-600">
              {" "}
              {/* Red discount text */}
              DISCOUNT
            </p>
            <h3 className="text-2xl font-bold text-red-800">
              {" "}
              {/* Darker red discount amount */}
              SLASH 50% OFF
            </h3>
            <p className="text-gray-600 mt-2">On your next order</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">Use code:</p>
            <p className="text-xl font-bold text-red-700">
              {" "}
              {/* Red code text */}
              FOODIE50
            </p>
            <p className="text-gray-600 mt-2">T&C's apply*</p>
          </div>
        </div>
        {/* Optional: Add a call-to-action button */}
        <button className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg">
          <Link to={"/allfoods"}>
            <BsFillCartFill className="inline-block mr-2" /> Order Now
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
