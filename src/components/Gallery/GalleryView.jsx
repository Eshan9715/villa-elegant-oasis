import React from 'react'

import b1 from '../../assets/7.jpg';
import b2 from '../../assets/8.jpg';
import b3 from '../../assets/9.jpg';
import b4 from '../../assets/10.jpg';
import b5 from '../../assets/11.jpg';
import b6 from '../../assets/12.jpg';
import b7 from '../../assets/13.jpg';


import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const GalleryView = () => {
  return (
    <div className='bg-[#231f20]' id="Gallery">
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        {/* <h1>What We Offer</h1> */}
        <div className='w-full items-center flex  justify-center'>
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-2xl md:text-4xl font-bold font-serif text-white"
            >
            Gallery          
            </motion.h1>
            {/* <motion.button
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="primary-btn"
            >
              Discover More
            </motion.button> */}
        </div>
        
        {/* <p className='py-4'>Your Oasis of Modern Luxury!</p> */}
        <motion.div
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
        >
          <div className='grid grid-rows-none md:grid-cols-6 py-8 gap-2 md:gap-4'>
              <img className='w-full h-[520px] object-cover col-span-2 md:col-span-3 row-span-2 hover:scale-105 duration-500' src={b1} alt="/" />
              <img className='w-full h-[250px] object-cover hover:scale-105 duration-500' src={b2} alt="/" />
              <img className='w-full h-[250px] object-cover hover:scale-105 duration-500' src={b3} alt="/" />
              <img className='w-full h-[250px] object-cover hover:scale-105 duration-500' src={b4} alt="/" />
              <img className='w-full h-[250px] object-cover hover:scale-105 duration-500' src={b5} alt="/" />
              <img className='w-full h-[250px] object-cover hover:scale-105 duration-500' src={b6} alt="/" />
              <img className='w-full h-[250px] object-cover hover:scale-105 duration-500' src={b7} alt="/" />
          </div>
        </motion.div>
        
    </div>
    </div>

  )
} 

export default GalleryView