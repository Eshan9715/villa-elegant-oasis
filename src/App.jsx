import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Brands from "./components/Brands/Brands";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Testimonial from "./components/Testimonial/Testimonial";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import GalleryView from "./components/Gallery/GalleryView";
import FAQPage from "./components/Faq/Faq";
import b7 from './assets/whatsapp.png';
import { Tooltip } from "@mui/material";
// import RoomRates from "./components/Accomodation/RoomRates";
import {Helmet} from "react-helmet";


const App = () => {
  return (
    <main className="overflow-x-hidden">
    <Helmet>
      <meta charSet="utf-8" />
        <title>Villa Elgant Oasis</title>
        <link rel="canonical" href="https://villa-elegant-oasis.netlify.app/" />
    </Helmet>
    <div className="p-1 md:p-3 fixed bottom-0 right-0 z-20">
      <a href='https://wa.me/94762466890' target="_blank" rel="noopener noreferrer" >
        <Tooltip title="Chat on whatsapp" placement="left"><img src={b7} alt="" className="w-12 md:w-16 animate-bounce"/></Tooltip>
       </a>
    </div>
    
      <Navbar />
      <Hero />
      <About />
      {/* <Brands /> */}
      <GalleryView/>
      {/* <RoomRates/> */}
      <FAQPage/>
      <Banner />
      {/* <Services /> */}
      {/* <Banner2 />
      <Testimonial /> */}
      {/* <Newsletter /> */}
      <Footer />
    </main>
  );
};

export default App;
