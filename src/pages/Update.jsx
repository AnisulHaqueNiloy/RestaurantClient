import React, { useContext, useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AuthContext } from "../authprovider/AuthProvider";
import axios from "axios";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { id } = useParams();
  const [food, setfood] = useState([]);
  useEffect(() => {
    fetch(`https://restaurant-server-rouge.vercel.app/foods-detail/${id}`)
      .then((res) => res.json())
      .then((data) => setfood(data));
  }, [id]);
  console.log(food);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const img = form.FoodImage.value;
    const name = form.FoodName.value;
    const category = form.Category.value;
    const quantity = form.Quantity.value;
    const price = form.Price.value;
    const origin = form.FoodOrigin.value;
    const username = form.Name.value;
    const email = form.Email.value;
    const description = form.Description.value;

    const formData = {
      img,
      name,
      category,
      quantity,
      price,
      origin,
      username,
      email,
      description,
    };

    try {
      const response = await fetch(
        `https://restaurant-server-rouge.vercel.app/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json(); // Properly parse the JSON response

      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "Product updated successfully.",
          icon: "success",
          confirmButtonText: "Cool",
        }).then(() => {
          navigate("/myfoods"); // Navigate to "My Foods" after the user confirms
        });
      } else {
        Swal.fire({
          title: "No Changes Detected",
          text: "The product was not updated because no changes were made.",
          icon: "info",
          confirmButtonText: "Got it",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while updating the product.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-5">Add New Food</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white p-6 rounded-lg shadow-md"
      >
        <div className="form-control">
          <label className="label font-medium">Food Name</label>
          <input
            type="text"
            name="FoodName"
            defaultValue={food.FoodName}
            placeholder="Enter food name"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label font-medium">Food Image URL</label>
          <input
            type="url"
            name="FoodImage"
            defaultValue={food.FoodImage}
            placeholder="Enter image URL"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label font-medium">Category</label>
          <input
            type="text"
            name="Category"
            defaultValue={food.Category}
            placeholder="e.g., Italian, Japanese"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label font-medium">Quantity</label>
          <input
            type="number"
            name="Quantity"
            defaultValue={food.Quantity}
            min="1"
            placeholder="Enter quantity"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label font-medium">Price ($)</label>
          <input
            type="number"
            name="Price"
            step="0.01"
            defaultValue={food.Price}
            placeholder="Enter price"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label font-medium">Added By (Name)</label>
          <input
            type="text"
            name="Name"
            value={user.displayName}
            disabled
            placeholder="Your name"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label font-medium">Added By (Email)</label>
          <input
            type="email"
            name="Email"
            value={user.email}
            disabled
            placeholder="Your email"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label font-medium">Food Origin</label>
          <input
            type="text"
            name="FoodOrigin"
            defaultValue={food.FoodOrigin}
            placeholder="e.g., Italy, Japan"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label font-medium">Description</label>
          <textarea
            name="Description"
            defaultValue={food.Description}
            placeholder="Write a short description of the food"
            className="textarea textarea-bordered w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full flex items-center justify-center gap-2"
        >
          <AiOutlinePlusCircle size={20} />
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
