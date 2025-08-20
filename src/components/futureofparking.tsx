"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";

export default function FutureOfParking() {
  const slides = [
    {
      image: "/FuturePOD.png",
      textRight: null,
      textLeft: null,
    },
    {
      image: "/FUTUREsigns.png",
      textRight: null,
      textLeft: null,
    },
    {
      image: "/ai3.png",
      textRight: "Designed for mounting on ceiling or cable channel",
      textLeft: "Detects and Transmits parking space availability in real-time",
    },
  ];

  const duration = 5;
  const [current, setCurrent] = useState(0);

  const [loopStarted, setLoopStarted] = useState(false);

  useEffect(() => {
    if (!loopStarted) return; // only start loop after scroll
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [loopStarted]);

  return (
    <section className="flex flex-col px-5 py-5 justify-center items-center">
      <h2 className="mt-5 md:mt-30 text-center">
        <span className="font-bold">THE FUTURE</span> OF PARKING IS{" "}
        <span className="font-bold">HERE</span>
      </h2>
      <motion.div
        className="relative min-h-[40vh] mt-0 md:mt-20 w-full flex justify-center items-center"
        onViewportEnter={() => setLoopStarted(true)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <AnimatePresence>
          <motion.div
            key={current}
            className="absolute inset-0 m-auto flex justify-center items-center w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Slide image */}
            <img
              src={slides[current].image}
              className="object-contain max-w-full max-h-full"
            />

            {/* Conditionally render text inside the same slide */}
            {slides[current].textRight && slides[current].textLeft && (
              <motion.div
                className="absolute bottom-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 3, delay: 0.5 }}
              >
                <p className="items-start justify-start">
                  {slides[current].textRight}
                </p>
                <p>{slides[current].textLeft}</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
