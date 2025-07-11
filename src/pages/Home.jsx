import { Helmet } from "react-helmet";
import Carousel from "../components/Carousel";
import Testimonial from "../components/Testimonial";
import TopSellingFoods from "../components/TopSellingFoods";
import CuisineTimeline from "../components/CuisineTimeline";
import DiscountBanner from "../components/DiscountBanner";
import OfferSection from "../components/OfferSection";
import HeroSection from "../components/HeroSection";

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
        <OfferSection></OfferSection>
        <CuisineTimeline></CuisineTimeline>
        <HeroSection></HeroSection>
        <Testimonial></Testimonial>
        <DiscountBanner></DiscountBanner>
      </div>
    </div>
  );
};

export default Home;
