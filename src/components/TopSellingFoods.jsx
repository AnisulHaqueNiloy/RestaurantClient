import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsStar } from "react-icons/bs";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const TopSellingFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("https://restaurant-server-rouge.vercel.app/topfoods")
      .then((res) => setFoods(res.data));
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Top Selling Food Items</h1>
        <p className="text-gray-600 mt-2">
          Discover our most popular dishes loved by everyone!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16">
        {foods.map((food) => (
          <div
            key={food._id}
            className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm hover:scale-105 transform transition ease-in-out"
          >
            <img
              src={food.FoodImage}
              alt={food.FoodName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between">
                <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">
                  {food.FoodName}
                </h3>
                <span className="flex items-center">
                  <BsStar className="text-yellow-500 text-sm inline-block" />
                  <span className="text-gray-600 text-sm ml-1">4.1 (500+)</span>
                </span>
              </div>
              <div className="flex items-center mt-2 ">
                <p className="line-clamp-2">{food?.Description}</p>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <div className="gap-5 flex items-center">
                  <span className="font-semibold text-gray-800">
                    ${food?.Price}
                  </span>
                  <span className="text-gray-600 text-sm mr-2">
                    {food?.Category}
                  </span>
                </div>

                <button className="bg-red-500 px-1 py-1 rounded-lg shadow-md hover:bg-black hover:text-white">
                  <NavLink to={`/foods-detail/${food._id}`}>See more</NavLink>
                </button>
              </div>
            </div>
          </div>
          // <div key={food._id} className="card bg-white shadow-xl rounded-lg">
          //   <figure className="h-52">
          //     <img
          //       src={food.FoodImage}
          //       alt={food.FoodName}
          //       className="w-full h-full object-cover rounded-t-lg"
          //     />
          //   </figure>
          //   <div className="card-body p-4">
          //     <h2 className="card-title text-xl font-semibold">
          //       {food.FoodName}
          //     </h2>
          //     <p className="text-gray-700">${food?.Price}</p>
          //     <div className="mt-4 flex justify-center">
          //       <button className="btn btn-primary flex items-center gap-2">
          //         <NavLink to={`/foods-detail/${food._id}`}>
          //           {""}
          //           <FaEye /> Details
          //         </NavLink>
          //       </button>
          //     </div>
          //   </div>
          // </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="btn btn-secondary px-6 py-2 text-lg">
          <NavLink to={"/allfoods"}> See All</NavLink>
        </button>
      </div>
    </div>
  );
};

export default TopSellingFoods;
