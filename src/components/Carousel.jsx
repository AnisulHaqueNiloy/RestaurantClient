import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useEffect, useState } from "react";
import Slide from "./Slide";
const Carousel = () => {
  const [slide, setslide] = useState([]);
  useEffect(() => {
    fetch("banner.json")
      .then((res) => res.json())
      .then((data) => setslide(data));
  }, []);
  // console.log(slide);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slide.map((slide, id) => (
          <SwiperSlide key={id}>
            <Slide slide={slide}></Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
