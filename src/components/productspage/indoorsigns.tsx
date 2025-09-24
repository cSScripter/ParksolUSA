import Image from "next/image";
import LongLineBreak from "../longlinebreak";

export default function IndoorSigns() {
  return (
    <section className="flex flex-col items-center gap-2 justify-center pt-5 md:pt-15 pb-5 md:pb-20 px-5 text-center">
      <h2 className="!font-bold md:!text-[27px] mb-5 md:mb-10">
        Indoor Dynamic LED Signs
      </h2>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 mb-5 md:mb-10">
        <Image
          src="/productspage/indoorsign1.jpg"
          alt="inndoor parking signs"
          width={469}
          height={313}
          className="object-cover"
        />
        <Image
          src="/productspage/indoorsign2.png"
          alt="indoor parking garage signs"
          width={469}
          height={313}
          className="object-cover"
        />
      </div>
      <p className="max-w-[500px] text-left !text-[17px] mb-5 md:mb-24">
        Our indoor LED signs can be customized for general premium, valet,
        handicapped, or employee parking. The options are limitless.{" "}
      </p>
      <LongLineBreak />
    </section>
  );
}
