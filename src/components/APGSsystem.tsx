import Image from "next/image";
import ShortLineBreak from "./shortlinebreak";

export default function APGSSystem() {
  return (
    <section className="flex flex-col items-center gap-2 justify-center pt-10 md:pb-20 md:pt-30 px-5 md:px-20 text-center">
      <h2 className="!font-bold !text-[38px] md:!text-[44px]">Products</h2>
      <ShortLineBreak />
      <div className="flex flex-col gap-5 mt-15 text-center max-w-[840px]">
        <h2 className="!font-bold md:!text-[27px] mb-10">
          APGS PODs Camera System
        </h2>
        <p>
          Our <span className="font-bold">camera system</span> and proprietary{" "}
          <span className="font-bold">detection</span> software, utilizing{" "}
          <span className="font-bold">AI</span> with high-performance graphics
          cards, will enable clients to choose cameras off the shelves or use
          our camera pods in combination with unboarded LED indicators to assist
          drivers in finding parking spaces{" "}
          <span className="font-bold">faster</span>.
        </p>
        <p>
          Our detection using <span className="font-bold">video analytics</span>{" "}
          powered by <span className="font-bold">AI</span> allow us to determine
          the make, model, direction, vectors, and license plate with a high
          accuracy rate of <span className="font-bold">98% and above</span> over
          time. Our system captures the license plate and the characteristics of
          a vehicle using multiple angles and different cameras.
        </p>
        <p>
          We can combine <span className="font-bold">sensors</span> and{" "}
          <span className="font-bold">camera systems</span> as needed to
          customize the best solution for each garage. This flexibility allows
          us to provide <span className="font-bold">custom</span> positioning of
          LED indicators. Utilizing{" "}
          <span className="font-bold">Bluetooth in beacon technology</span>, our
          system can activate EV chargers and offers a unique ability to reserve
          a specific parking space. The reserved parking space can be secured
          through our <span className="font-bold">phone app</span> or{" "}
          <span className="font-bold">online platform</span> and will be guarded
          with our unique parking space guard gate.
        </p>
      </div>
    </section>
  );
}
