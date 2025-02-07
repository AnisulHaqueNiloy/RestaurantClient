import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import axios from "axios";
import moment from "moment";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxios from "../UseAxios";
import { Helmet } from "react-helmet";

const MyOrders = () => {
  const axiosI = UseAxios();
  const { user } = useContext(AuthContext);

  const [bdata, setbData] = useState([]);

  // Fetch food data

  // Fetch purchase data
  useEffect(() => {
    // fetch(`https://restaurant-server-rouge.vercel.app/purchase?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setbData(data));
    axiosI
      .get(`/purchase?email=${user?.email}`)
      .then((res) => setbData(res.data));
  }, [user?.email]);
  console.log(bdata);
  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://restaurant-server-rouge.vercel.app/foods-delete/${id}`
      );
      // Update the UI after deletion

      setbData(bdata.filter((item) => item._id !== id));
      Swal.fire({
        icon: "error",
        title: "Food deleted",
        text: "The food item has been successfully deleted!",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error deleting the item:", error);
    }
  };

  return (
    <div className="p-8">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Orders</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        <h1 className="text-3xl font-bold mb-6">Order List</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
          {bdata.map((order) => (
            <div
              key={order._id}
              className="card bg-white shadow-lg rounded-lg overflow-hidden relative"
            >
              {/* Food Image */}
              <figure>
                <img
                  src={order.foodImage}
                  alt={order.FoodName}
                  className="w-full h-40 object-cover"
                />
              </figure>

              {/* Card Content */}
              <div className="card-body p-4">
                {/* Food Name */}
                <h2 className="card-title text-lg font-bold">
                  {order.foodName}
                </h2>

                {/* Food Details */}
                <div className="mt-2">
                  <p>
                    <span className="font-medium">Price:</span> ${order.price}
                  </p>
                  <p>
                    <span className="font-medium">Quantity:</span>{" "}
                    {order.quantity}
                  </p>
                  <p>
                    <span className="font-medium">Owner:</span>{" "}
                    {order.ownerName} (
                    <a
                      href={`mailto:${order.ownerEmail}`}
                      className="text-blue-500 hover:underline"
                    >
                      {order.ownerEmail}
                    </a>
                    )
                  </p>
                  <p>
                    <span className="font-medium">Buyer:</span>{" "}
                    {order.buyerName} (
                    <a
                      href={`mailto:${order.buyerEmail}`}
                      className="text-blue-500 hover:underline"
                    >
                      {order.buyerEmail}
                    </a>
                    )
                  </p>
                  <p>
                    <span className="font-medium">Purchase Date:</span>{" "}
                    {moment(order.purchaseDate).format("MMMM Do YYYY, h:mm A")}
                  </p>
                </div>

                {/* Delete Button */}
                <button
                  className="btn btn-error mt-4 w-full flex items-center justify-center gap-2"
                  onClick={() => handleDelete(order._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
