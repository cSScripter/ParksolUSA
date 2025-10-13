"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
//change timer on loop
export default function FutureOfParking() {
  const slides = [
    { image: "/FuturePOD.png", alt: "4k Camera POD", textRight: null, textLeft: null },
    { image: "/FUTUREsigns.png", alt: "smart custom signage", textRight: null, textLeft: null },
    {
      image: "/ai3.png",
      alt: "AI detection software",
      textRight: "Designed for mounting on ceiling or cable channel",
      textLeft: "Detects and Transmits parking space availability in real-time",
    },
  ];

  const duration = 5;
  const [current, setCurrent] = useState(0);
  const [loopStarted, setLoopStarted] = useState(false);

  useEffect(() => {
    if (!loopStarted) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [loopStarted]);

  useEffect(() => {
    const nextIndex = (current + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextIndex].image;
  }, [current]);

  return (
    <section className="flex flex-col px-5 py-5 justify-center items-center mb-5 md:mb-30">
      <h2 className="mt-5 md:mt-30 text-center">
        <span className="font-bold">THE FUTURE</span> OF PARKING IS{" "}
        <span className="font-bold">HERE</span>
      </h2>

      <motion.div
        className="relative min-h-[40vh] md:mt-20 w-full flex justify-center items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.2 }}
        onViewportEnter={() => {
          setTimeout(() => setLoopStarted(true), 0); //duartion for first slide adjustor
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0 m-auto flex justify-center items-center w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Slide image */}
            <motion.img
              src={slides[current].image}
              className="object-contain max-w-full max-h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            />

            {/* Optional text */}
            {slides[current].textRight && slides[current].textLeft && (
              <motion.div
                className="absolute bottom-10 text-center hidden lg:block px-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="flex min-h-[40vh] items-center !text-[0.5rem] !text-blue-400 px-75 pt-15">
                  <motion.p
                    className="justify-end w-1/2 pr-75"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    {slides[current].textRight}
                  </motion.p>

                  <motion.p
                    className="justify-start w-1/2 pl-75"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    {slides[current].textLeft}
                  </motion.p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
