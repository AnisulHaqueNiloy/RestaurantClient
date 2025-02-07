import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ParentLayout = () => {
  const location = useLocation();

  return (
    <div className="">
      <div className="z-10">
        <Navbar></Navbar>
      </div>
      <div className={`pt-[68px] min-h-[calc(100vh-300px)] `}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ParentLayout;
