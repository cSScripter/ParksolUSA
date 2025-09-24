import Image from "next/image";

export default function LEDSigns() {
  return (
    <section className="flex flex-col items-center gap-2 justify-center pt-5 md:pt-15 pb-5 md:pb-20  px-5 text-center">
      <h2 className="!font-bold md:!text-[27px] mb-5 md:mb-10">LED Signs</h2>
      <h3 className="!font-bold mb-10">Wayfinding and Inventory Displays</h3>
      <p className="max-w-[840px]">
        Our LED signs are manufactured right here in the{" "}
        <span className="font-bold">USA</span>, utilizing high-quality
        components and our own board design. Our unique software allows seamless{" "}
        <span className="font-bold">integration</span> with our other products
        (PGS) and can also function as a{" "}
        <span className="font-bold">standalone</span> unit. The interface for
        sign control is user-friendly, accessible to operators through{" "}
        <span className="font-bold">web-based commands</span>.
      </p>

      <div className="flex flex-col md:flex-row gap-5 md:gap-15 mt-5 md:mt-20 justify-center items-center">
        <p className="max-w-[420px]">
          Our standard LED sign measurements L= 25.4&quot; H= 6.56&quot;
        </p>
        <Image
          src="/productspage/LEDfull.png"
          alt="standard LED parking sign"
          width={373}
          height={96}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-5 md:gap-15 my-5 md:my-20 justify-center items-center">
        <p className="max-w-[440px] md:pr-20">
          Our icon LED sign measurements L= 12.6&quot; H= 6.56&quot;
        </p>
        <Image
          src="/productspage/LEDfull2.png"
          alt="icon LED sign with parking count"
          width={291}
          height={148}
          className="object-cover"
        />
      </div>

      <h3 className="!font-bold mb-5 md:mb-10">Typical Icons</h3>
      <div className="flex flex-col md:flex-row gap-5 md:gap-15">
        <Image
          src="/productspage/LED1.png"
          alt="Parking Icon"
          width={190}
          height={190}
          className="object-cover"
        />
        <Image
          src="/productspage/LED2.png"
          alt="Handicap Icon"
          width={190}
          height={190}
          className="object-cover"
        />
        <Image
          src="/productspage/LED3.png"
          alt="electric vehicle icon"
          width={190}
          height={190}
          className="object-cover"
        />
        <Image
          src="/productspage/LED4.png"
          alt="no parking icon"
          width={190}
          height={190}
          className="object-cover"
        />
      </div>

      <h3 className="max-w-[600px] my-5 md:my-24">
        From the <span className="font-bold">two-module</span> option we can
        connect them to accommodate larger sizes
      </h3>

      <div className="flex flex-col md:flex-row gap-5 md:gap-15 my-5 md:my-20 justify-center items-center">
        <p className="max-w-[360px] md:pl-28">
          Typical <span className="font-bold">LED</span> sign using our{" "}
          <span className="font-bold">two-modules</span> to display inventory
          and special group icons
        </p>
        <Image
          src="/productspage/LEDfull3.png"
          alt="full parking sign"
          width={573}
          height={149}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-15 mb-5 md:mb-20 justify-center items-center">
        <p className="max-w-[340px] md:pr-24">
          Typical installation: the <span className="font-bold">indoor</span>{" "}
          bracket can be suspended from the{" "}
          <span className="font-bold">ceiling</span> or{" "}
          <span className="font-bold">wall-mounted</span>
        </p>
        <Image
          src="/productspage/bracket.png"
          alt="sign bracket installation"
          width={361}
          height={371}
          className="object-cover"
        />
      </div>
    </section>
  );
}
