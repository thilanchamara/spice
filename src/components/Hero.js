import React from 'react';
import image1 from '../assets/cinnamon-h-1.jpg';
import image2 from '../assets/cinnamon-h-2.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../style/swiper-overrides.css';  // Custom styles for Swiper
import logo from "../assets/new.png"

const Hero = () => {
  return (
    <div className="relative">
      {/* Text Content Above the Swiper */}
      {/* <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white space-y-6 p-4 bg-opacity-50 bg-black">
        <h1 className="text-3xl font-bold">
          Welcome to Anura Spice, your trusted source for high-quality, aromatic cinnamon products. We are passionate about bringing you the finest quality spices harvested from the best sources around Sri Lanka, to add flavor, health benefits, and warmth to your life.
        </h1>
        <h2 className="text-2xl font-bold mt-6">
          We offer a range of products designed to meet your needs. Explore our collection today and discover the natural goodness and versatility of Cinnamon, Pepper, Betel Nuts, and Cloves at Anura Spice.
        </h2>
      </div> */}
      <div className=' absolute inset-0 z-10 flex justify-center items-center'>
        <img src={logo} className=' text-white scale-125'/>
      </div>

      {/* Swiper Component for Image Sliders */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // Enable Swiper modules
        slidesPerView={1}
        // navigation// Define navigation buttons
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
        }} // Enable clickable pagination
        className="relative z-0"
      >
        {/* Image Slide 1 */}
        <SwiperSlide>
          <div 
            style={{
              backgroundImage: `url(${image1})`,
              height: "calc(100vh - 5rem)",  // Adjust for navbar height
              backgroundSize: "cover",
              backgroundPosition: "center",
              
            }}
          >
            {/* Image Slide 1 Content */}
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
              zIndex: 1, // Ensure it's above the image
            }}
          ></div>
        </SwiperSlide>

        {/* Image Slide 2 */}
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${image2})`,
              height: "calc(100vh - 5rem)",  // Adjust for navbar height
              backgroundSize: "cover",
              backgroundPosition: "center",
              // opacity:0.8
            }}
          >
            {/* Image Slide 2 Content */}
          </div>
        </SwiperSlide>

        {/* Pagination Dots */}
        {/* <div className="swiper-pagination absolute bottom-10 z-0"></div> */}

        {/* Navigation Arrows */}
        {/* <div className="swiper-button-next absolute top-1/2 right-4 z-10 text-white">▶</div>
        <div className="swiper-button-prev absolute top-1/2 left-4 z-10 text-white">◀</div> */}
      </Swiper>
    </div>
  );
};

export default Hero;
