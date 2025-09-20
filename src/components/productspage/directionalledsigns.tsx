import Image from "next/image";

export default function DirectionalLEDSigns() {
  return (
    <section className="flex flex-col items-center gap-2 justify-center pt-5 md:pt-15 pb-5 md:pb-20  px-5 text-center">
      <h2 className="!font-bold md:!text-[27px] mb-5 md:mb-10">
        APGS Directional LED Signs
      </h2>
      <div className="flex flex-col md:flex-row gap-2 max-w-[940px]">
        <Image
          src="/productspage/directionsign.png"
          alt="pod at different angles"
          width={423}
          height={346}
          className="object-cover"
        />
        <div className="mcp-list flex flex-col gap-3 max-w-[480px]">
          <h2 className="mcp-list !font-bold md:!text-[27px] pt-2">
            Benefits and Features
          </h2>
          <ul className="mcp-list text-left list-disc pl-5 md:pl-15">
            <li>Smart LED six 6.5" X 6.5", 256 tiles each</li>
            <li>Multi-language, numbers, and symbols display</li>
            <li>64k colors</li>
            <li>Standard interface and prefilled images</li>
            <li>Edge to Edge Display</li>
            <li>Indoor/Outdoor</li>
            <li>Chainable</li>
            <li>Updatable in real-time</li>
            <li>Standard brackets for installation</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[820px] my-5 md:mt-15">
        <p>
          <span className="font-bold">ParksolUSA LED signs</span> are built in
          Scottsdale, Arizona, <span className="font-bold">USA</span>. The APGS
          Directional LED Sign Assembly contains{" "}
          <span className="font-bold">four</span> tiles that can display{" "}
          <span className="font-bold">parking</span> or{" "}
          <span className="font-bold">traffic</span> data. Mostly used as an
          insert within monument signs' housing. The LED sign can display ever
          letter in <span className="font-bold">any language, all numbers</span>
          , and supports both <span className="font-bold">standard icons</span>{" "}
          for the parking industry and{" "}
          <span className="font-bold">custom icons</span>.{" "}
          <span className="font-bold">ParksolUSA LED software</span> interface
          allows for easy customization of colors, new icons, and uploading
          custom pictures and images.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
        <p className="max-w-[440px] pt-5 md:pt-20 md:ml-15">
          The model <span className="font-bold">L1-06D-LED-01</span>, six tiles
          of 6.5&quot; X 6.5&quot; with 256 pixels each, can display a{" "}
          <span className="font-bold">digit icon</span>, any other{" "}
          <span className="font-bold">symbol</span> that is desired, or an{" "}
          <span className="font-bold">image</span> from the prefilled library.
          Projecting images or messages on the entire assembly is also included
          in this model. In our experience, the first four tiles are typically
          used for general parking inventory data in real time, and the second
          two tiles are reserved for special groups such as ADA, EV, and others.
        </p>
        <Image
          src="/productspage/directionalled2.png"
          alt="LEDs Single Row Sign"
          width={462}
          height={413}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-5 md:mt-15 justify-center items-center">
        <p className="max-w-[460px] pt-5 pr-0 md:pr-15">
          The model L1-06D-LED-01, <span className="font-bold">twelve</span> tiles of 6.5&quot; X 6.5&quot; with 256 pixels
          each, can display a <span className="font-bold">digit icon</span>, any other <span className="font-bold">symbol</span> that is desired, or
          an <span className="font-bold">image</span> from the prefilled library.
        </p>
        <Image
          src="/productspage/doubleled.png"
          alt="LEDs Double Row Sign"
          width={365}
          height={385}
          className="object-cover"
        />
      </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-5 md:mt-15 justify-center items-center">
        <p className="max-w-[425px] pt-5">
          The model L1-06D-LED-01, <span className="font-bold">eighteen</span> tiles of 6.5&quot; X 6.5&quot; with 256 pixels
          each, can display a <span className="font-bold">digit icon</span>, any other <span className="font-bold">symbol</span> that is desired, or
          an <span className="font-bold">image</span> from the prefilled library.
        </p>
        <Image
          src="/productspage/tripleled.png"
          alt="LEDs Double Row Sign"
          width={450}
          height={432}
          className="object-cover"
        />
      </div>
    </section>
  );
}
