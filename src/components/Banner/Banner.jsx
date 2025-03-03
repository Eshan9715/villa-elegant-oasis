import React from "react";
import Banner1 from "../../assets/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Banner = () => {
  return (
    <div className='bg-[#231f20]' id="Location">
      <div className="container py-14">
        <div className="grid grid-cols-1 gap-10">
        <div className="space-y-5 flex justify-center flex-col items-center w-full">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-2xl md:text-4xl font-bold font-serif text-white"
            >
            Location            
            </motion.h1>
          {/* image section */}
              <motion.div
                      variants={SlideUp(0.2)}
                      initial="initial"
                      whileInView={"animate"}
                      className="w-full"
                  >
                      <div className="flex flex-col justify-center w-full">
                      <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                      src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Villa Elegant Oasis, B03 Perth Paradise, Gurugoda, Horana 12400&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

                      </div>
                  </motion.div>
        


          {/* text section */}
          
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-100 text-sm leading-7"
            >
              Located 6km from Horana Town to villa which
              Closest town to Elegant Oasis.{" "}
            </motion.p>
            {/* <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Discover Now
              </motion.button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
