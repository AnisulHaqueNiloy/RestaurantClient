import { Helmet } from "react-helmet";
import Carousel from "../components/Carousel";
import Testimonial from "../components/Testimonial";
import TopSellingFoods from "../components/TopSellingFoods";
import CuisineTimeline from "../components/CuisineTimeline";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <Carousel></Carousel>
      <div className="w-11/12 mx-auto">
        <TopSellingFoods></TopSellingFoods>
        <CuisineTimeline></CuisineTimeline>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
