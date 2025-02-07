import React, { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AuthContext } from "../authprovider/AuthProvider";
import { NavLink } from "react-router-dom";
import UseAxios from "../UseAxios";
import { Helmet } from "react-helmet";

const MyFoods = () => {
  const { user } = useContext(AuthContext);
  const [foodItems, setFoodItems] = useState([]);
  const axiosI = UseAxios();
  console.log(user);
  useEffect(
    () => {
      axiosI
        .get(`/myfoods?email=${user?.email}`)
        .then((res) => setFoodItems(res.data))
        .catch((err) => console.error("Error fetching foods:", err));
    },
    [user?.email],
    axiosI
  );

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Foods</title>
      </Helmet>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {foodItems.map((food) => (
          <div key={food._id} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src={food.FoodImage}
                alt={food.FoodName}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{food.FoodName}</h2>
              <p>{food.Category}</p>
              <p className="text-xl font-semibold">${food.Price}</p>
              <div className="card-actions justify-end">
                <NavLink to={`/update/${food._id}`} className="btn btn-primary">
                  <FaEdit className="mr-2" />
                  Update
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFoods;
