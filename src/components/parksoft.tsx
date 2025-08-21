"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
//change button color
export default function ParkSoft() {
  return (
    <section className="relative w-full h-[50vw]">
      <Image
        src="/parksoftbg.png"
        alt="background"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      {/*overlay*/}
      <div className="absolute inset-0 flex flex-col px-5 md:px-0">
        <motion.div
          className="flex flex-col justify-start items-center mb-[10%] mt-5 md:mt-24"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="!text-[32px] text-center md:!text-[44px]">
            <span className="font-bold">Garage</span> Management has never been{" "}
            <span className="font-bold">easier</span>
          </h2>
        </motion.div>
        <div className="flex justify-center items-center">
          <motion.div
            className="pr-5 mb-24"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2>
              Introducing
              <br /> <span className="font-bold">Parksoft™</span>
            </h2>
            <p className="!text-[12px] mb-5">
              The most advanced garage management software avaliable.
            </p>
            <Link
              href="#"
              className="bg-[#67bfeb] text-white !text-[16px] md:text-lg hover:bg-[#12212f] py-1 px-2 md:py-3 md:px-4"
            >
              Learn More
            </Link>
          </motion.div>
          <div>
            <Image
              src="/parksoftresponsive.png"
              alt="responsive screens"
              width={700}
              height={300}
              className="aspect-[700/300]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
