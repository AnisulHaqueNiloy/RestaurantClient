import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";

const PurchasePage = () => {
  const { user } = useContext(AuthContext);
  const food = useLoaderData();

  const [quantity, setQuantity] = useState(1);

  const handlePurchase = async (e) => {
    e.preventDefault();

    const purchaseData = {
      foodName: food.FoodName,
      foodImage: food.FoodImage,
      ownerName: food.AddBy.Name,
      ownerEmail: food.AddBy.Email,
      price: food.Price,
      quantity: parseInt(quantity),
      buyerName: user.displayName,
      buyerEmail: user.email,
    };

    console.log(purchaseData);

    try {
      const response = await axios.post(
        `https://restaurant-server-rouge.vercel.app/purchase/${food._id}`,
        purchaseData
      );

      Swal.fire({
        title: "Success!",
        text: response.data.message || "Purchase successful!",
        icon: "success",
        confirmButtonText: "OK",
      });
      setQuantity(1); // Reset quantity after successful purchase
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      Swal.fire({
        title: "Error!",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const isOwnFood = food?.AddBy.Email === user.email;
  const isOutOfStock = food?.Quantity === 0;
  const isQuantityInvalid = quantity > food?.Quantity;

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">
        Purchase {food?.FoodName}
      </h2>
      <form onSubmit={handlePurchase} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Food Name
          </label>
          <input
            type="text"
            value={food?.FoodName}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="text"
            value={`$${food?.Price}`}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Available Quantity
          </label>
          <input
            type="text"
            value={food?.Quantity || "Not Available"}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        {isOutOfStock && (
          <p className="text-red-500">This item is out of stock.</p>
        )}
        {isOwnFood && (
          <p className="text-red-500">
            You cannot purchase your own added food item.
          </p>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quantity to Purchase
          </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.min(e.target.value, food?.Quantity))
            }
            className="input input-bordered w-full"
            min={1}
            max={food?.Quantity || 1}
            disabled={isOutOfStock || isOwnFood}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Buyer Name
          </label>
          <input
            type="text"
            value={user?.displayName}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Buyer Email
          </label>
          <input
            type="email"
            value={user?.email}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        {isQuantityInvalid && (
          <p className="text-red-500">
            Quantity cannot exceed available stock ({food?.Quantity}).
          </p>
        )}
        <button
          type="submit"
          className="btn btn-primary w-full mt-4"
          disabled={isOutOfStock || isOwnFood || isQuantityInvalid}
        >
          Purchase
        </button>
      </form>
    </div>
  );
};

export default PurchasePage;
