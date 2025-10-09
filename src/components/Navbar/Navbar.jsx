import React, { useState } from "react";
import Logo from "../../assets/logor.png";
import { motion } from "framer-motion";
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";


const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "#Home",
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
    icon: <IoLogoWhatsapp/>
    
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
  },
   {
    id: 4,
    title: "Contact",
    link: "+94 741133623 | +94 767673085",
    icon: <CallIcon/>
  }
  
];
const Navbar = () => {
  const [isHamClick, setisHamClick] = useState(false);

  const handleNavClick = (e) => {
    setisHamClick(false);
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - document.querySelector('nav').offsetHeight, 
      behavior: 'smooth'
    });
  };

  return (
    <nav className="bg-[#231f20] w-full fixed z-50">
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
        <div className="hidden lg:flex justify-between !space-x-12">
          {social.map((link) => {
            return (
              <div className="flex text-white mx-2 justify-start items-center gap-1">{link.icon}
              <p
                className="inline-block text-xs font-normal text-slate-200"
              >
                {link.title==='Reserverations'?  <a href='https://wa.me/94762466890' target="_blank" rel="noopener noreferrer">{link.link}</a> : 
                link.title==='Info'? <a href="mailto:elegantoasis2@gmail.com">elegantoasis2@gmail.com</a> :
                <a href="https://maps.app.goo.gl/9d2KN6syMPrYCHpc8" target="_blank" rel="noopener noreferrer">{link.link}</a>}
              </p></div>
            );
          })}
        </div>
        <div className="h-0.5 w-full bg-slate-200"></div>
        <div className="hidden lg:flex justify-evenly !space-x-12">
          {NavLinks.map((link) => {
            return (
              <a
                href={link.link}
                className="inline-block mx-4 text-md font-semibold text-white" onClick={handleNavClick}
              >
                {link.title}
              </a>
            );
          })}
        </div>
        </div>
        {/* Button section */}
        <div className="flex gap-3 justify-center items-center">
        <div>
          <a href='https://www.booking.com/hotel/lk/villa-elegant-oasis.html' target="_blank" rel="noopener noreferrer" className="primary-btn">Book Now</a>
        </div>
        {!isHamClick ? <svg data-slot="icon" fill="none" stroke-width="1.5" onClick={()=>setisHamClick(!isHamClick)} className={`w-8 h-8 md:w-12 md:h-12 xl:hidden flex cursor-pointer text-white`} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.  org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
            :
            <svg data-slot="icon" fill="none" stroke-width="1.5" onClick={()=>setisHamClick(!isHamClick)} className={`w-8 h-8 md:w-12 md:h-12 xl:hidden flex cursor-pointer text-white`} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.  org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
            </svg>    
            }
            </div>
      </motion.div>

      {isHamClick && 
            <div className='bg-white w-full overflow-y-auto xl:hidden flex flex-col gap-1 z-50 mt-[10px] p-3'>
            {NavLinks.map((link) => {
            return (
              <a
                href={link.link}
                className="inline-block text-sm md:text-lg p-1 text-center hover:bg-slate-200" onClick={handleNavClick}
              >
                {link.title}
              </a>
            );
          })}

          </div>}
     
    </nav>
  );
};

export default Navbar;
