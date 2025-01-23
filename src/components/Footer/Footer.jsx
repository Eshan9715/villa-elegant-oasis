import React from "react";
import Logo from "../../assets/logor.png";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";
import { FaFacebook } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";

const Footer = () => {
  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="container py-11" id="Contact-Us">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info section */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="" className="w-10" />
              <p className="text-xl font-semibold font-serif">Villa Elegant Oasis</p>
            </div>
            <p className="font-normal text-sm ">Discover the epitome of luxury by living in our exclusive pool villa near Horana. Southwest-facing, the villa enjoys abundant natural light, creating an inviting atmosphere. Ready to 
            move in and fully furnished, it features high-end finishes and contemporary design details.</p>
            <p> &copy; 2025 Villa Elegant Oasis. All rights reserved</p>
          </div>
          {/* Footer Link */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Links</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#faq">FAQ's</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#location">Contact Us</a>
                </li>
              </ul>
            </div>
            {/* <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Care Guide</a>
                </li>
                <li>
                  <a href="#">Guaranty</a>
                </li>
              </ul>
            </div> */}
          </div>
          {/* Contact section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact us</h1>
            <ul className="text-sm font-normal space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href='https://wa.me/94762466890' target="_blank" rel="noopener noreferrer">+94762466890</a>
              </li>
              <li className="flex items-center space-x-3">
                <IoMdMail />
                <a href="mailto:info@villaelegantoasis.com">info@villaelegantoasis.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaFacebook />
                <a href="https://www.facebook.com/profile.php?id=61570654167956" target="_blank" rel="noopener noreferrer">Villa Elegant Oasis</a>
              </li>
              <li className="flex items-center space-x-3">
                <TbBrandBooking />
                <a href="https://www.booking.com/hotel/lk/villa-elegant-oasis.html" target="_blank" rel="noopener noreferrer">Villa Elegant Oasis</a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom section */}
        <p className="text-center text-sm font-semibold  border-t-2 pt-5 mt-5">
          &copy; 2025 Villa Elegant Oasis. All rights reserved
        </p>
      </div>
    </motion.footer>
   
  );
};

export default Footer;
