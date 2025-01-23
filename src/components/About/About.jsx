import React from "react";
import HeroPng from "../../assets/logorr.png";
import factile from "../../assets/fac_tile.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const About = () => {
  return (
      <div className="container" id="About-Us">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[400px] gap-10">
          {/* Text section */}
          <div className="flex flex-col justify-center gap-7 md:pr-8 xl:pr-10 text-center md:text-left pt-20 md:pt-16 px-5">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-2xl md:text-4xl font-bold font-serif"
            >
            WELCOME TO VILLA ELEGANT OASIS           
            </motion.h1>
            <motion.p
              variants={SlideUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-sm md:text-base text-gray-500 leading-7"
            >
              Discover the epitome of luxury by living in our exclusive pool villa near Horana. Southwest-facing, the villa enjoys abundant natural light, creating an inviting atmosphere. Ready to 
              move in and fully furnished, it features high-end finishes and contemporary design details.
              
              With, only 4 contemporary villas, each one meticulously designed for comfort and privacy,
              featuring single-level 3-bedroom villas with en-suite bathrooms, lounge and modern 
              kitchen, thoughtfully designed for a relaxing yet sophisticated lifestyle. Inspired by serene 
              oases, our villas boast elegant curves and flowing lines, setting the perfect ambiance.
            </motion.p>
            <div className="space-x-4">
              <motion.button
                variants={SlideUp(0.8)}
                initial="initial"
                animate="animate"
                className="primary-btn uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Get started
              </motion.button>
              <motion.button
                variants={SlideUp(1.1)}
                initial="initial"
                animate="animate"
                className="primary-btn uppercase"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
          {/* Images section */}
          <div className="flex flex-col items-center justify-center ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={HeroPng}
              alt=""
              className="w-[80%] md:w-[700px] object-contain h-[300px] rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={factile}
              alt=""
              className="w-full object-contain h-[300px] rounded-md hidden md:flex"
            />
          </div>

      </div>
  );
};

export default About;
