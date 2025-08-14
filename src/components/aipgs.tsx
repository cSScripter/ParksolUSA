"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Aipgs() {
  const images = [
    "/ai1-2.png",
    "/ai2.png",
    "/ai3.png",
    "/ai4.png",
    "/ai5.png",
    "/ai6.png",
  ];

   return (
  <section className="flex justify-center py-20 md:py-40">
  <div className="grid md:grid-cols-2 items-center gap-16 max-w-7xl w-full px-4 md:px-0">
    
    {/* Swiper in left column */}
    <div className="flex justify-center">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full max-w-xs md:max-w-lg bg-white"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-[500px] h-[380px] object-contain transition duration-1500 ease-out filter blur-sm"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Text in right column */}
    <div className="flex flex-col justify-start items-start mx-1 md:mx-0">
      <h2>AI Parking Guiding<br /> System</h2>
      <p className="my-5">ParksolUSA video analytic space system includes:</p>
      <ul className="list-disc my-1 ml-7 space-y-2">
        <li>Introducing a new way to oversee parking - managing right from the parking space.</li>
        <li>AI surveillance of vehicles in parked spaces, nested zones, and during transit between levels or lots.</li>
        <li>AI monitoring of vehicles entering or leaving garages, different levels, and virtual gates.</li>
        <li>Achieving 100% accuracy in AI vehicle detection when the system is operational.</li>
        <li>Prompting the AI with the right questions – shaping the evolution of parking alerts and events.</li>
      </ul>
    </div>
    
  </div>
</section>


  );
}
