"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const MotionImage = motion.create(Image);

export default function OurPartners() {
  const logoSlides = useMemo(() => [
    [
      "/partnerlogos/avnet.png",
      "/partnerlogos/HUB.png",
      "/partnerlogos/AxisLogo.png",
    ],
    [
      "/partnerlogos/LAWA.png",
      "/partnerlogos/ABM.png",
      "/partnerlogos/Ventura.png",
    ],
    [
      "/partnerlogos/HooverDam.png",
      "/partnerlogos/Davis.png",
      "/partnerlogos/Convergint.png",
    ],
    [
      "/partnerlogos/RitzCarlton.png",
      "/partnerlogos/Samsung.png",
      "/partnerlogos/pittspa.png",
    ],
  ], []);

  const [logoIndices, setLogoIndices] = useState([0, 0, 0, 0]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const intervals = logoSlides.map((slot, i) => {
      const delay = 5000 + i * 1000; // each slot changes at least every 5s
      return setInterval(() => {
        setLogoIndices((prev) => {
          const newIndices = [...prev];
          newIndices[i] = (newIndices[i] + 1) % slot.length;
          return newIndices;
        });
      }, delay);
    });

    return () => intervals.forEach(clearInterval);
  }, [logoSlides]);

  return (
    <section ref={carouselRef} className="flex flex-col items-center pt-10 md:pb-20 md:gap-5 md:pt-20 px-5 md:px-20">
      <h2>
        Our <span className="font-bold">Partners</span>
      </h2>

      <div className="flex w-full flex-col md:flex-row items-center justify-center my-5 gap-5 md:gap-10 mt-5 md:my-20">
        {logoSlides.map((slot, i) => (
          <div
            key={i}
            className="relative w-[224px] h-[145px] flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <MotionImage
                key={logoIndices[i]}
                src={slot[logoIndices[i]]}
                alt={`Partner ${i + 1}`}
                fill
                 sizes="224px"
                className="object-contain"
                priority={logoIndices[i] === 0}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              />
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
