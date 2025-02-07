import React from "react";
import {
  FaUtensils,
  FaDrumstickBite,
  FaFish,
  FaSeedling,
} from "react-icons/fa";

const cuisines = [
  {
    id: 1,
    icon: <FaUtensils className="text-xl text-red-500" />,
    title: "Chinese Cuisine",
    description: "Experience authentic flavors of China with our diverse menu.",
    image: "https://i.ibb.co.com/StHVDkf/chinese.jpg",
  },
  {
    id: 2,
    icon: <FaSeedling className="text-xl text-green-500" />,
    title: "Thai Cuisine",
    description:
      "Savor the taste of Thailand with our carefully crafted dishes.",
    image: "https://i.ibb.co.com/1myskDF/thai.jpg",
  },
  {
    id: 3,
    icon: <FaDrumstickBite className="text-xl text-yellow-500" />,
    title: "Chicken Delights",
    description:
      "Indulge in tender and flavorful chicken recipes from around the world.",
    image: "https://i.ibb.co.com/z6q0Y29/chicken.jpg",
  },
  {
    id: 4,
    icon: <FaFish className="text-xl text-blue-500" />,
    title: "Seafood Specials",
    description: "Dive into a selection of fresh and exquisite seafood dishes.",
    image: "https://i.ibb.co.com/9tG26W4/sea.jpg",
  },
];

const CuisineTimeline = () => {
  return (
    <section className="bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Our Cuisine</h2>
      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
        {cuisines.map((cuisine, index) => (
          <div
            key={cuisine.id}
            className={`flex items-center w-full mb-10 ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            {/* Content */}
            <div
              className={`w-1/2 px-6 ${
                index % 2 === 0 ? "text-right" : "text-left"
              }`}
            >
              <h3 className="text-xl font-semibold">{cuisine.title}</h3>
              <p className="text-gray-600 mt-2">{cuisine.description}</p>
            </div>
            {/* Timeline Icon */}
            <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto">
              {cuisine.icon}
            </div>
            {/* Image */}
            <div className="w-1/2 px-6">
              <img
                src={cuisine.image}
                alt={cuisine.title}
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CuisineTimeline;
