import Image from "next/image";

export default function OutdoorSigns() {
  return (
    <section className="flex flex-col items-center gap-2 justify-center pt-5 md:pt-15 pb-5 md:pb-20 px-5 text-center">
      <h2 className="!font-bold md:!text-[27px] mb-5 md:mb-15">
        Outdoor Dynamic LED Signs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-15 gap-y-15 justify-items-center items-center">
        <Image
          src="/productspage/outdoorsign1.png"
          alt="sign bracket installation"
          width={458}
          height={344}
          className="object-cover"
        />
        <Image
          src="/productspage/outdoorsign2.jpg"
          alt="sign bracket installation"
          width={458}
          height={344}
          className="object-cover"
        />
        <Image
          src="/productspage/outdoorsign3.jpg"
          alt="Outdoor Parking Sign"
          width={268}
          height={403}
          className="object-cover"
        />
        <p className="max-w-[500px] text-left !text-[17px]">
          LED signs are the simplest way to display which parking levels are
          available. Drivers can easily locate and navigate to the closest
          available parking without wasting time searching. These signs can also
          be customized with your choice of icons and wording.{" "}
        </p>
      </div>
    </section>
  );
}
