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
                /><div className="absolute flex items-start justify-start inset-0 p-20"><div className="bg-white p-6 w-140 shadow-md">
                  <h2>Case Study: The Ritz-Carlton at Half Moon Bay</h2><br />
                  <p>See a coastal parking garage transformed with the technology of smart parking.</p> <br />
                  <Link href="#" className="bg-[#5e748a] text-white font-bold text-lg hover:bg-blue-200 hover:text-black py-2 px-4 rounded-md">
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