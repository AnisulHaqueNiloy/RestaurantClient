import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import Loader from "../Loader";
import { BsStar } from "react-icons/bs";

const Food = () => {
  const { pathname } = useLocation();
  const [foods, setFoods] = useState([]); // Original food data
  const [filteredFoods, setFilteredFoods] = useState([]); // Filtered food data
  const [search, setSearch] = useState(""); // Search query
  const [loading, setLoading] = useState(true); // Loading state
  const [sortOrder, setSortOrder] = useState("asc"); // Sort order (asc or desc)
  console.log(pathname);
  // Fetch all foods from the API
  useEffect(() => {
    fetch("https://restaurant-server-rouge.vercel.app/allfoods")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setFilteredFoods(data);
        setLoading(false); // Initially show all foods
      });
  }, []);

  if (loading) return <Loader />;

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

  // Handle sorting by price (ascending)
  const handleSortAsc = () => {
    const sorted = [...filteredFoods].sort((a, b) => a.Price - b.Price);
    setFilteredFoods(sorted);
    setSortOrder("asc");
  };

  // Handle sorting by price (descending)
  const handleSortDesc = () => {
    const sorted = [...filteredFoods].sort((a, b) => b.Price - a.Price);
    setFilteredFoods(sorted);
    setSortOrder("desc");
  };

  return (
    <div className="w-11/12 mx-auto">
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

      {/* Sorting Buttons */}
      <div className="flex flex-col md:flex-row md:justify-end gap-4 mb-6">
        <button
          onClick={handleSortAsc}
          className={`btn ${
            sortOrder === "asc" ? "btn-primary" : "btn-outline"
          }`}
        >
          Sort by Price (Low to High)
        </button>
        <button
          onClick={handleSortDesc}
          className={`btn ${
            sortOrder === "desc" ? "btn-primary" : "btn-outline"
          }`}
        >
          Sort by Price (High to Low)
        </button>
      </div>

      {/* Food Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
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
                <div className="absolute top-2 right-2 badge badge-primary">
                  {food.Quantity > 0 ? (
                    <p>Quantity: {food.Quantity}</p>
                  ) : (
                    <p>Item is not available</p>
                  )}
                </div>
                <div className="flex justify-between">
                  <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">
                    {food.FoodName}
                  </h3>
                  <span className="flex items-center">
                    <BsStar className="text-yellow-500 text-sm inline-block" />
                    <span className="text-gray-600 text-sm ml-1">
                      4.1 (500+)
                    </span>
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
                  {!pathname == "/allfoods" && (
                    <button className="bg-red-500 px-1 py-1 rounded-lg shadow-md hover:bg-black hover:text-white">
                      <NavLink to={`/update/${food._id}`}>Update</NavLink>
                    </button>
                  )}
                </div>
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
