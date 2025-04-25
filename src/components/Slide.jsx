/* eslint-disable react/prop-types */

const Slide = ({ slide }) => {
  // console.log(slide);
  return (
    <div>
      <div
        className="carousel-item relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{slide.heading}</h1>
          <p className="mb-6 text-lg">{slide.description}</p>
          <a
            href={slide.buttonLink}
            className="btn btn-primary px-6 py-2 text-lg"
          >
            {slide.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slide;
