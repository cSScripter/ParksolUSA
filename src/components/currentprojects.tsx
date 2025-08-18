"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
            className="w-[1420px] h-[300px] md:h-[680px]"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover transition duration-1500 ease-out"
                />
              </SwiperSlide>
            ))}
          </Swiper> 
</section>
    );
}