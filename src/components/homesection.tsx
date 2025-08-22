"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function HomeSection() {
  return (
    <section className="w-screen h-[440px] md:h-[760px] relative">
      
      <Image
        src="/parkinglot.jpg"
        alt="Parking lot"
        fill
        priority={false} // lazy by default unless priority={true}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/20"></div>

      
      <div className="relative flex items-start md:items-center justify-center h-full px-4 pt-16 md:pt-0">
        <h1 className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            We Take
            <br className="md:hidden" />{" "}
            <span className="font-bold">Parking</span>
          </motion.span>
          {/* We Take<br className="md:hidden" /> <span className="font-bold">Parking</span> */}
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 3 }}
          >
            to a Whole <br className="md:hidden" />
            <span className="font-bold">New Level</span>
          </motion.span>
        </h1>
      </div>
    </section>
  );
}
