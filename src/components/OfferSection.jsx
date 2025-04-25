import React from "react";
import bg from "../../src/assets/offerbg.jpeg";
import bg1 from "../../src/assets/offerThumb1_1.png";
import bg2 from "../../src/assets/offerThumb1_2.png";
import bg3 from "../../src/assets/offerThumb1_3.png";
import { Link } from "react-router-dom";
const OfferSection = () => {
  return (
    <div className="">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-100 py-10 px-10">
          <div
            className="flex justify-between px-5 py-5 items-center gap-2 flex-col-reverse md:flex-row"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div>
              <h3 className="uppercase text-red-600 text-lg font-bold">
                On this week
              </h3>
              <h2 className="uppercase text-white text-2xl font-bold">
                spicy fried chicken
              </h2>
              <p className="uppercase text-orange-500 text-sm font-bold">
                Limited time offer
              </p>
              <button className="bg-red-600 px-4 py-2 text-white my-4">
                <Link to={"/allfoods"}>Order now</Link>
              </button>
            </div>
            <div>
              <img src={bg1} alt="" />
            </div>
          </div>
          <div
            className="flex justify-between px-5 py-5 items-center gap-2 flex-col-reverse md:flex-row"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div>
              <h3 className="uppercase text-red-600 text-lg font-bold">
                Welcome freshheat
              </h3>
              <h2 className="uppercase text-white text-2xl font-bold">
                Todays special food
              </h2>
              <p className="uppercase text-orange-500 text-sm font-bold">
                Limited time offer
              </p>
              <button className="bg-red-600 px-4 py-2 text-white my-4">
                <Link to={"/allfoods"}>Order now</Link>
              </button>
            </div>
            <div>
              <img src={bg2} alt="" />
            </div>
          </div>
          <div
            className="flex justify-between px-5 py-5 items-center gap-2 flex-col-reverse md:flex-row"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div>
              <h3 className="uppercase text-red-600 text-lg font-bold">
                On this week
              </h3>
              <h2 className="uppercase text-white text-2xl font-bold">
                special chicken roll
              </h2>
              <p className="uppercase text-orange-500 text-sm font-bold">
                Limited time offer
              </p>
              <button className="bg-red-600 px-4 py-2 text-white my-4">
                <Link to={`/allfoods`}>Order now</Link>
              </button>
            </div>
            <div>
              <img src={bg3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
