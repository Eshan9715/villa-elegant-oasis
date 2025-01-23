import React from "react";
import Logo from "../../assets/logor.png";
import { motion } from "framer-motion";
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "About Us",
    link: "#About-Us",
  },
  {
    id: 3,
    title: "FAQ",
    link: "#Faq",
  },
  {
    id: 4,
    title: "Gallery",
    link: "#Gallery",
  },
  {
    id: 5,
    title: "Location",
    link: "#Location",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "#Contact-Us",
  },
];

const social = [
  {
    id: 1,
    title: "Reserverations",
    link: "+94762466890",
    icon: <CallIcon/>
  },
  {
    id: 2,
    title: "Location",
    link: "B03 Perth Paradise, Gurugoda, Horana 12400",
    icon: <LocationOnIcon/>
  },
  {
    id: 3,
    title: "Info",
    link: "info@villaelegantoasis.com",
    icon: <MailIcon/>
  }
  
];
const Navbar = () => {
  return (
    <div className="bg-[#231f20] w-full fixed z-50">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-2 flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="flex flex-col items-center">
          <img src={Logo} alt="logo" className="w-20 md:w-32" />
          {/* <span className="text-2xl font-bold">Interior</span> */}
        </div>
        {/* Link section */}
        <div className="flex flex-col gap-1.5">
        <div className="hidden md:flex justify-between !space-x-12">
          {social.map((link) => {
            return (
              <div className="flex text-white mx-2 justify-start items-center gap-1">{link.icon}
              <p
                className="inline-block text-xs font-normal text-slate-200"
              >
                {link.title==='Reserverations'?  <a href='https://wa.me/94762466890' target="_blank" rel="noopener noreferrer">{link.link}</a> : 
                link.title==='Info'? <a href="mailto:info@villaelegantoasis.com">info@villaelegantoasis.com</a> :
                <a href="https://maps.app.goo.gl/9d2KN6syMPrYCHpc8" target="_blank" rel="noopener noreferrer">{link.link}</a>}
              </p></div>
            );
          })}
        </div>
        <div className="h-0.5 w-full bg-slate-200"></div>
        <div className="hidden md:flex justify-evenly !space-x-12">
          {NavLinks.map((link) => {
            return (
              <a
                href={link.link}
                className="inline-block mx-4 text-md font-semibold text-white"
              >
                {link.title}
              </a>
            );
          })}
        </div>
        </div>
        {/* Button section */}
        <div>
          <a href='https://www.booking.com/hotel/lk/villa-elegant-oasis.html' target="_blank" rel="noopener noreferrer" className="primary-btn">Book Now</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
