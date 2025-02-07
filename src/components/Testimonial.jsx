import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Mock fetching the JSON data
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="bg-gray-100 px-5 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">What Our Customers Say</h1>
        <p className="text-gray-600 mt-2">
          Real feedback from our valued customers
        </p>
      </div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="px-4 md:px-16"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="card bg-white shadow-xl rounded-lg p-6 flex flex-col items-center pb-7">
              <div className="relative w-24 h-24 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full object-cover w-full h-full"
                />
                <FaQuoteLeft className="absolute -top-2 -left-12 text-4xl text-primary opacity-30" />
              </div>
              <h2 className="text-xl font-semibold mb-2">{testimonial.name}</h2>
              <p className="text-gray-700 text-center">{testimonial.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
