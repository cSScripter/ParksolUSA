"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

//refactor tomorrow for const slides instead of images with description and button

export default function CurrentProjects() {
    const images = [
        "/projectsLAX.png",
        "/projectsRitz.jpg",
        "/projectsHooverDam.jpg",
    ];
    return (
<section className="flex justify-center items-center border-y border-gray-200 p-5 md:p-20">

    {/*replace h2 with slider and check if border displays bottom after next section is added*/}
     <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="w-[1420px]  aspect-[1420/680]"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full">
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover transition duration-1500 ease-out"
                /><div className="absolute flex items-center justify-center md:items-start md:justify-start inset-0 md:p-20">
                  <div className="bg-white p-4 md:p-10 w-80 md:w-140 shadow-md">
                  <h3>Case Study: The Ritz-Carlton at Half Moon Bay</h3><br />
                  <h4>See a coastal parking garage transformed with the technology of smart parking.</h4> <br />
                  <Link href="#" className="bg-[#5e748a] text-white font-bold text-sm md:text-lg hover:bg-blue-200 hover:text-black py-1 px-2 md:py-2 md:px-4 rounded-md">
                  Read More
                  </Link>
                  </div>
                </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> 
</section>
    );
}