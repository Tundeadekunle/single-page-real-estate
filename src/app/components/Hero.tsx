// // src/app/components/Hero.tsx
// "use client";

// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { useRef as reactUseRef } from "react";

// // const heroImages = [
// //   "/house3.jpg",
// //   "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80",
// //   "https://images.unsplash.com/photo-1600566753053-8f4d0c32f3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
// // ];

// export default function Hero() {
// const [currentSlide, setCurrentSlide] = useState(0);
//   const slideInterval = useRef<NodeJS.Timeout | null>(null);




//   const slides = [
//     {
//       id: "slide-1",
//       src: "/house2.jpg",
//       alt: "Luxury Home",
//       title: "Find Your Dream Home",
//       description: "Discover the perfect property for your needs. From modern apartments to spacious family homes."
//     },
//     {
//       id: "slide-2",
//       src: "/house6.jpg",
//       alt: "Modern Villa",
//       title: "Premium Properties",
//       description: "Explore our exclusive collection of luxury homes with premium amenities and locations."
//     },
//     {
//       id: "slide-3",
//       src: "/house5.jpg",
//       alt: "Country House",
//       title: "Investment Opportunities",
//       description: "Smart real estate investments with great returns. Start building your property portfolio today."
//     },
//   ];

//   // Auto slide functionality
//   useEffect(() => {
//     const startSlideShow = () => {
//       slideInterval.current = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       }, 5000);
//     };

//     const stopSlideShow = () => {
//       if (slideInterval.current) {
//         clearInterval(slideInterval.current);
//       }
//     };

//     startSlideShow();

//     // Clean up on component unmount
//     return () => stopSlideShow();
//   }, [slides.length]);

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   const goToNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const goToPrevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     {/* Hero Section with Sliding Background */}
//       <section className="relative bg-gray-100 h-[500px] overflow-hidden">
//         {/* Slides */}
//         <div className="relative w-full h-full">
//           {slides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 index === currentSlide ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <img
//                 src={slide.src}
//                 alt={slide.alt}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-start">
//           <div className="container px-6 text-white max-w-2xl text-left">
            
//             {/* Animated Heading - Different for each slide */}
//             <motion.h1
//               key={slides[currentSlide].id}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="text-4xl md:text-5xl font-bold mb-4"
//             >
//               {slides[currentSlide].title}
//             </motion.h1>

//             {/* Animated Paragraph - Different for each slide */}
//             <motion.p
//               key={`desc-${slides[currentSlide].id}`}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
//               className="mb-6"
//             >
//               {slides[currentSlide].description}
//             </motion.p>

//             {/* CTA Button - Same for all slides */}
//             <motion.a
//               href="#"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
//               className="inline-block bg-blue-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
//             >
//               Get Started
//             </motion.a>
//           </div>
//         </div>

//         {/* Slide Indicators */}
//         <div className="absolute bottom-6 left-0 right-0 flex justify-center space-2 z-10">
//           {slides.map((slide, index) => (
//             <button
//               key={`indicator-${slide.id}`}
//               className={`w-3 h-3 rounded-full transition-colors ${
//                 index === currentSlide ? "bg-white" : "bg-white/50"
//               }`}
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white bg-black/30 p-2 rounded-full transition-colors"
//           onClick={goToPrevSlide}
//           aria-label="Previous slide"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//         <button
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white bg-black/30 p-2 rounded-full transition-colors"
//           onClick={goToNextSlide}
//           aria-label="Next slide"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
//           </svg>
//         </button>
//       </section>
//   )
// }

















// src/app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<number | null>(null);

  const slides = [
    {
      id: "slide-1",
      src: "/house8.jpg",
      alt: "Luxury Home",
      title: "Find Your Dream Home",
      description: "Discover the perfect property for your needs. From modern apartments to spacious family homes."
    },
    {
      id: "slide-2",
      src: "/house6.jpg",
      alt: "Modern Villa",
      title: "Premium Properties",
      description: "Explore our exclusive collection of luxury homes with premium amenities and locations."
    },
    {
      id: "slide-3",
      src: "/house5.jpg",
      alt: "Country House",
      title: "Investment Opportunities",
      description: "Smart real estate investments with great returns. Start building your property portfolio today."
    },
  ];

  // Auto slide functionality
  useEffect(() => {
    const startSlideShow = () => {
      slideInterval.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    };

    const stopSlideShow = () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };

    startSlideShow();

    // Clean up on component unmount
    return () => stopSlideShow();
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    // Hero Section with Sliding Background
    <section className="relative bg-gray-100 h-[500px] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-start">
        <div className="container px-6 text-white max-w-2xl text-left">
          {/* Animated Heading - Different for each slide */}
          <motion.h1
            key={slides[currentSlide].id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {slides[currentSlide].title}
          </motion.h1>

          {/* Animated Paragraph - Different for each slide */}
          <motion.p
            key={`desc-${slides[currentSlide].id}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mb-6"
          >
            {slides[currentSlide].description}
          </motion.p>

          {/* CTA Button - Same for all slides */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="inline-block bg-blue-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
          >
            Get Started
          </motion.a>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((slide, index) => (
          <button
            key={`indicator-${slide.id}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white bg-black/30 p-2 rounded-full transition-colors"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white bg-black/30 p-2 rounded-full transition-colors"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}