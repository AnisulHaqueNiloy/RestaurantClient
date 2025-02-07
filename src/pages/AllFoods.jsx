import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PageTitle from "../components/PageTitle";
import Food from "../components/Food";

const AllFoods = () => {
  const [foods, setfoods] = useState([]);
  useEffect(() => {
    axios
      .get("https://restaurant-server-rouge.vercel.app/allfoods")
      .then((data) => setfoods(data.data));
  }, []);

  console.log(foods);

  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Foods</title>
      </Helmet>
      <PageTitle
        title={"All Foods"}
        desc={"Your favorite place for amazing cuisines!"}
      ></PageTitle>

      <div className="py-5">
        <Food></Food>
      </div>
    </div>
  );
};

export default AllFoods;
