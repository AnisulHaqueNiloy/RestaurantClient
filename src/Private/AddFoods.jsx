import axios from "axios";
import { useContext } from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import { AuthContext } from "../authprovider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddFoods = () => {
  const { user } = useContext(AuthContext);
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      FoodName: form.FoodName.value,
      FoodImage: form.FoodImage.value,
      Category: form.Category.value,
      Quantity: parseInt(form.Quantity.value),
      Price: parseFloat(form.Price.value),
      AddBy: {
        Name: form.Name.value,
        Email: form.Email.value,
      },
      FoodOrigin: form.FoodOrigin.value,
      Description: form.Description.value,
      count: 0,
    };

    console.log("Food Data Submitted: ", formData);

    try {
      const { data } = await axios.post(
        "https://restaurant-server-rouge.vercel.app/foods",
        formData
      );
      console.log(data);

      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Food Added",
        text: "The food item has been successfully added!",
        confirmButtonText: "OK",
      });
      nav("/myfoods");

      // Reset the form after successful submission
      form.reset();
    } catch (error) {
      console.error("Error adding food:", error);

      // Show error alert
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add the food item. Please try again.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Foods</title>
      </Helmet>
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
            placeholder="e.g., Italy, Japan"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label font-medium">Description</label>
          <textarea
            name="Description"
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
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFoods;
