// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import leaf from "../../src/assets/leaf.png";
import pizza from "../../src/assets/pizza.png";
import tomato from "../../src/assets/tomato.png";
import bg from "../../src/assets/bg-2.jpeg";

export default function HeroSection() {
  return (
    <div
      className="relative flex justify-between px-5 py-5 items-center gap-2 flex-col-reverse md:flex-row bg-cover bg-no-repeat bg-center h-[500px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Left Side */}
      <div className="z-10 space-y-4 max-w-xl">
        <p className="font-semibold text-lg uppercase text-white">
          Welcome Fresheat
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Today <span className="text-yellow-400">Special</span> Food
        </h1>
        <p className="text-orange-500 text-xl font-semibold">
          Limited Time Offer
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded flex items-center gap-2 font-bold"
        >
          Order Now <FaArrowRight />
        </motion.button>
      </div>

      {/* Pizza Section */}
      <div className="relative mt-12 md:mt-0 z-10">
        {/* Offer bubble */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-[-30px] left-[-30px] bg-white text-orange-600 font-bold px-4 py-2 rounded-full shadow-lg text-lg"
        >
          45% Off
        </motion.div>

        {/* Pizza Image - infinite float animation */}
        <motion.img
          src={pizza}
          alt="Pizza"
          className="w-[300px] md:w-[400px] drop-shadow-2xl rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Decorative Vegetables with looping animation */}
      <motion.img
        src={leaf}
        alt="Leaf"
        className="absolute top-4 left-4 w-16 opacity-60 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={tomato}
        alt="Tomato"
        className="absolute bottom-4 right-4 w-20 opacity-80 z-20"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
