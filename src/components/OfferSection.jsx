import React from "react";
import bg from "../../src/assets/offerbg.jpeg";
import bg1 from "../../src/assets/offerThumb1_1.png";
import bg2 from "../../src/assets/offerThumb1_2.png";
import bg3 from "../../src/assets/offerThumb1_3.png";
const OfferSection = () => {
  return (
    <div className="">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-100 py-10 px-10">
          <div style={{ backgroundImage: `url(${bg})` }}>ssss</div>
          <div style={{ backgroundImage: `url(${bg})` }}>ssss</div>{" "}
          <div style={{ backgroundImage: `url(${bg})` }}>ssss</div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
