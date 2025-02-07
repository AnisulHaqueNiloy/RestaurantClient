import { createBrowserRouter } from "react-router-dom";
import ParentLayout from "../parentLayout/ParentLayout";
import Error from "../Error";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import Gallery from "../pages/GalleryPage";
import Register from "../pages/Register";
import PrivateRoute from "../Private/PrivateRoute";
import MyOrders from "../Private/MyOrders";
import AddFoods from "../Private/AddFoods";
import MyFoods from "../Private/MyFoods";
import Details from "../pages/Details";
import FoodDetails from "../pages/FoodDetails";
import PurchasePage from "../pages/PurchasePage";
import Update from "../pages/Update";
import GalleryPage from "../pages/GalleryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ParentLayout></ParentLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allfoods",
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/gallery",
        element: <GalleryPage></GalleryPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/foods-detail/:id",
        loader: async ({ params }) => {
          const response = await fetch(
            `https://restaurant-server-rouge.vercel.app/foods-detail/${params.id}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch food details");
          }
          return response.json(); // Parse and return the JSON response
        },
        element: <FoodDetails></FoodDetails>,
      },

      {
        path: "/purchase/:id",
        loader: async ({ params }) => {
          const response = await fetch(
            `https://restaurant-server-rouge.vercel.app/foods-detail/${params.id}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch food details");
          }
          return response.json(); // Parse and return the JSON response
        },
        element: (
          <PrivateRoute>
            <PurchasePage></PurchasePage>
          </PrivateRoute>
        ),
      },

      {
        path: "/myorders",

        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(
            `https://restaurant-server-rouge.vercel.app/foods-detail/${params.id}`
          ),

        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/addfood",
        element: (
          <PrivateRoute>
            <AddFoods></AddFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/myfoods",
        element: (
          <PrivateRoute>
            <MyFoods></MyFoods>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
