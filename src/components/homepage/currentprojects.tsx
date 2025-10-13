"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

{
  /*replace button links at finish and possibly add circles at bottom, check if border displays bottom after next section is added*/
}

export default function CurrentProjects() {
  const slides = [
    {
      image: "/projectsLAX.png",
      h3: "Current Project: LAX",
      h4: "Construction is underway to overhaul parking at one of the busiest airports in the world.",
      buttonText: "Read More",
      buttonLink: "/case-studies",
    },
    {
      image: "/projectsRitz.jpg",
      h3: "Case Study: The Ritz-Carlton at Half Moon Bay",
      h4: "See a coastal parking garage transformed with the technology of smart parking.",
      buttonText: "Read More",
      buttonLink: "/case-studies",
    },
    {
      image: "/projectsHooverDam.jpg",
      h3: "Case Study: The Hoover Dam",
      h4: "The national historic landmark received a much-needed ultramodern parking renovation.",
      buttonText: "Read More",
      buttonLink: "/case-studies",
    },
  ];
  return (
    <section className="flex justify-center items-center border-y border-gray-300 p-5 md:p-20">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-[1420px]  aspect-[1420/680]"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover transition duration-1500 ease-out"
              />
              <div className="absolute flex items-center lg:items-start md:items-center justify-center md:justify-start inset-0 lg:p-25 md:p-10">
                <div className="bg-white opacity-90 p-4 md:p-6 lg:p-8 w-60 md:w-150 shadow-md">
                  <h3 className="!text-[18px] md:!text-[32px] lg:!text-[50px]">{slide.h3}</h3>
                  <h4 className="text-gray-600 mt:0 md:mt-1 mb-0 md:mb-6">{slide.h4}</h4>{" "}
                
                  {slide.buttonText && (
                    <Link
                      href={slide.buttonLink}
                      aria-label={`Read more about our parking system case study and smart parking solutions featured in ${slide.h3}`}
                      className="bg-[#5e748a] text-white font-bold text-xs md:text-xs lg:text-lg hover:bg-blue-200 hover:text-black py-1 px-2 md:py-2 md:px-4 rounded-md"
                    >
                      {slide.buttonText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
