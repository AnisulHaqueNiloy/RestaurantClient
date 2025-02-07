import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const food = useLoaderData();
  console.log(food);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-100 shadow-xl rounded-lg py-10">
      {/* Food Image */}
      <div className="mb-6">
        <img
          src={food?.FoodImage}
          alt={food?.FoodName}
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>

      {/* Food Information */}
      <div className="flex flex-col gap-4">
        {/* Food Name */}
        <h2 className="text-3xl font-bold text-primary">{food?.FoodName}</h2>

        {/* Description */}
        <p className="text-gray-600">{food?.Description}</p>

        {/* Additional Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <p className="text-sm text-gray-500">
            <span className="font-medium">Category:</span> {food?.Category}
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Food Origin:</span> {food?.FoodOrigin}
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Added By:</span> {food?.AddBy.Name} (
            {food?.AddBy.Email})
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Quantity:</span> {food?.Quantity}
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Purchase Count:</span>{" "}
            {food.Count > 0 ? food?.Count : 0}
          </p>
        </div>

        {/* Price and Purchase */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-lg font-semibold text-success">
            Price: ${food?.Price}
          </p>
          <button
            className="btn btn-primary flex items-center gap-2"
            // onClick={() => handlePurchase(food)}
          >
            <NavLink to={`/purchase/${food?._id}`}>
              <FaShoppingCart />
              Purchase
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

// Sample purchase handler
// const handlePurchase = (food) => {
//   console.log(`Purchasing ${food.FoodName}`);
//   // Redirect logic (e.g., useNavigate or window.location.href)
// };

export default FoodDetails;
