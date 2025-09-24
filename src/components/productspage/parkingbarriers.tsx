import Image from "next/image";
import LongLineBreak from "../longlinebreak";

export default function ParkingBarriers() {
  return (
    <section className="flex flex-col items-center gap-2 justify-center pt-5 md:pt-10 pb-5 md:pb-15 px-5 text-center">
      <h2 className="!font-bold md:!text-[27px] mb-5 md:mb-10">
        Parking Barriers
      </h2>
      <Image
        src="/productspage/parkingbarrier1.jpg"
        alt="parking spot barriers"
        width={972}
        height={468}
        className="object-cover mb-5 md:mb-15"
      />
      <div className="flex flex-col md:flex-row gap-5 md:gap-15">
        <Image
          src="/productspage/parkingbarrier2.jpg"
          alt="single parking barrier"
          width={414}
          height={429}
          className="object-cover mb-5 md:mb-24"
        />
        <p className="max-w-[500px] text-left !text-[17px] mb-5">
          Drivers can now reserve their parking space ahead of time using an app
          on their phone. When they arrive to the parking lot, LPR(license plate
          recognition) detects their vehicle and allows entry, then detects the
          vehicle again at the parking space.{" "}
        </p>
      </div>
      <LongLineBreak />
    </section>
  );
}
