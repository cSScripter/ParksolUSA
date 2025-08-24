"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";
import { Swiper as SwiperClass } from "swiper";

export default function Aipgs() {
  const images = [
    "/ai1-2.png",
    "/AI.png",
    "/ai3.png",
    "/ai4.png",
    "/ai5.png",
    "/ai6.png",
  ];
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleSwiper = (swiper: SwiperClass) => {
    swiper.autoplay.stop();
    timeoutRef.current = setTimeout(() => {
      if (swiper?.autoplay?.start) {
        swiper.autoplay.start();
      }
    }, 6000);
  };
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="flex justify-center py-10 md:py-40">
      <div className="flex flex-col md:flex-row items-center gap-1 md:gap-16 w-full max-w-7xl px-6 md:px-0">
        {/* Swiper in left column */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Swiper
            onSwiper={handleSwiper}
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="w-full max-w-xs md:max-w-lg"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-auto object-contain transition duration-1500 ease-out filter blur-sm"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text in right column */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start">
          <h2>
            AI Parking Guiding
            <br /> System
          </h2>
          <p className="my-5 mt-1 md:mt-4 pb-2 md:pb">
            ParksolUSA video analytic space system includes:
          </p>
          <ul className="list-disc my-1np ml-7 space-y-2">
            <li>
              Introducing a new way to oversee parking - managing right from the
              parking space.
            </li>
            <li>
              AI surveillance of vehicles in parked spaces, nested zones, and
              during transit between levels or lots.
            </li>
            <li>
              AI monitoring of vehicles entering or leaving garages, different
              levels, and virtual gates.
            </li>
            <li>
              Achieving 100% accuracy in AI vehicle detection when the system is
              operational.
            </li>
            <li>
              Prompting the AI with the right questions - shaping the evolution
              of parking alerts and events.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
