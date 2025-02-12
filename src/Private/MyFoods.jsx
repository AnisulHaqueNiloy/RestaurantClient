import React, { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AuthContext } from "../authprovider/AuthProvider";
import { NavLink } from "react-router-dom";
import UseAxios from "../UseAxios";
import { Helmet } from "react-helmet";
import Loader from "../Loader";
import { BsStar } from "react-icons/bs";

const MyFoods = () => {
  const { user } = useContext(AuthContext);
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true); // Keep loading true initially
  const axiosI = UseAxios();
  console.log(user);

  useEffect(() => {
    setLoading(true); // Ensure loading is true when the API call starts
    axiosI
      .get(`/myfoods?email=${user?.email}`)
      .then((res) => {
        setFoodItems(res.data); // Set the fetched food items
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.error("Error fetching foods:", err);
        setLoading(false); // Set loading to false if there's an error
      });
  }, [user?.email, axiosI]); // Ensure that the API is re-triggered if the email changes

  if (loading) return <Loader />; // Display loader while loading

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Foods</title>
      </Helmet>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {foodItems.map((food) => (
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
              <div className="flex items-center mt-2">
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
                <button className="bg-red-500 px-1 py-1 rounded-lg shadow-md hover:bg-black hover:text-white">
                  <NavLink to={`/update/${food._id}`}>Update</NavLink>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFoods;
