import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Food = () => {
  const [foods, setFoods] = useState([]); // Original food data
  const [filteredFoods, setFilteredFoods] = useState([]); // Filtered food data
  const [search, setSearch] = useState(""); // Search query

  // Fetch all foods from the API
  useEffect(() => {
    fetch("https://restaurant-server-rouge.vercel.app/allfoods")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setFilteredFoods(data); // Initially show all foods
      });
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    // Filter foods based on FoodName or Category
    const filtered = foods.filter(
      (food) =>
        food.FoodName.toLowerCase().includes(query) ||
        food.Category.toLowerCase().includes(query)
    );
    setFilteredFoods(filtered);
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for foods by name or category..."
          className="input input-bordered w-full max-w-md"
          value={search}
          onChange={handleSearch}
        />
      </div>

      {/* Food Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <div
              key={food._id}
              className="card bg-base-100 shadow-xl rounded-lg relative"
            >
              {/* Quantity Badge */}
              <div className="absolute top-2 right-2 badge badge-primary">
                {food.Quantity > 0 ? (
                  <p>Quantity: {food.Quantity}</p>
                ) : (
                  <p>Item is not available</p>
                )}
              </div>

              {/* Food Image */}
              <figure>
                <img
                  src={food.FoodImage}
                  alt={food.FoodName}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </figure>

              {/* Card Body */}
              <div className="card-body">
                {/* Food Name */}
                <h2 className="card-title text-lg font-bold">
                  {food.FoodName}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-3">
                  {food.Description}
                </p>

                {/* Food Details */}
                <div className="mt-2">
                  <p>
                    <span className="font-medium">Category:</span>{" "}
                    {food.Category}
                  </p>
                  <p>
                    <span className="font-medium">Food Origin:</span>{" "}
                    {food.FoodOrigin}
                  </p>
                </div>

                {/* View Details Button */}
                <button className="btn btn-primary mt-3 w-full flex items-center gap-2">
                  <NavLink to={`/foods-detail/${food._id}`}>
                    <AiOutlineEye size={20} />
                    View Details
                  </NavLink>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No foods found for {search}.
          </p>
        )}
      </div>
    </div>
  );
};

export default Food;
