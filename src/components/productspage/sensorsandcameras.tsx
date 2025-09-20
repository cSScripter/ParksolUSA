import Image from "next/image";
import LongLineBreak from "../longlinebreak";

export default function SensorsAndCameras() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-5 mb-15 pt-5 md:pt-10">
      <h2 className="!font-bold md:!text-[27px] mb-15">Sensors and Cameras</h2>
      <Image
        src="/productspage/sensors.jpg"
        alt="parking system sensors"
        width={973}
        height={477}
        className="object-contain mb-10 md:mb-30"
      />
      <div className="flex flex-col md:flex-row items-center justify-center mt-20 mx-5 md:mt-20 gap-10 max-w-[940px]">
        <div>
          <Image
            src="/productspage/sensor2.png"
            alt="Ultrasonic sensor"
            width={490}
            height={386}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 max-w-[400px]">
          <h2 className="!font-bold md:!text-[27px]">APGS Ultrasonic Sensor</h2>
          <p className="text-left pl-5">
            The sensor detects and transmits parking availability in real-time.
            Designed for mounting on ceiling or cable channel.
          </p>
          <ul className="text-left !text-xs list-disc pl-5 md:pl-13 mcp-list">
            <li className="!font-light">Quick Connection</li>
            <li className="!font-light">Single parking space detection</li>
            <li className="!font-light">Din rail mounted</li>
            <li className="!font-light">High visibility LEDS</li>
            <li className="!font-light">IP66</li>
            <li className="!font-light">RGB 256</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col max-w-[880px] gap-5 mt-5 md:mt-15">
        <p>
          <span className="font-bold">Ultrasonic sensors</span> are designed for
          detecting and counting four-wheeled vehicles. This type of sensor can
          indicate when a single vehicle is parked.{" "}
          <span className="font-bold">LED indicators</span> will illuminate,
          displaying the actual state of the parking space—typically green for
          available space and{" "}
          <span className="font-bold">red for occupied</span>. Any of 256 colors
          can be selected to indicate vacant, occupied, reserved, time-out,
          overheat, or high-humidity states.
        </p>
        <p>
          Detection speed and distance{" "}
          <span className="font-bold">search algorithms</span> consumption
          ratio. These sensors can be seamlessly{" "}
          <span className="font-bold">integrated</span> with other ParksolUSA
          sensors and camera systems as needed to{" "}
          <span className="font-bold">customize</span> the best solution for
          each garage. This <span className="font-bold">flexibility</span>{" "}
          allows ParksolUSA to offer{" "}
          <span className="font-bold">customized positioning</span> of LED
          indicators, Bluetooth beacon technology to activate EV chargers, and{" "}
          <span className="font-bold">reservation</span> of specific parking
          spaces.
        </p>
        <p>
          Moreover, specific parking spaces can be conveniently booked through
          the <span className="font-bold">phone app</span> or{" "}
          <span className="font-bold">online</span> and secured with unique{" "}
          <span className="font-bold">
            parking space guard gate technology.
          </span>
        </p>
      </div>

         <div className="flex flex-col md:flex-row items-center justify-center mt-20 mx-5 mb-5 md:mb-30 md:mt-20 gap-5 md:gap-20 max-w-[940px]">
                <div className="flex flex-col gap-3 max-w-[400px]">
          <h2 className="!font-bold md:!text-[27px]">APGS Infra-Red Sensor Time of Flight (TOF)</h2>
          <p className="text-left pl-5">
            The sensor detects and transmits parking availability in real-time.
            Designed for mounting on ceiling or cable channel.
          </p>
          <ul className="text-left !text-xs list-disc pl-5 md:pl-12 mcp-list">
            <li className="!font-light">Quick Connection</li>
            <li className="!font-light">Din rail mounted</li>
            <li className="!font-light">High visibility LEDS</li>
            <li className="!font-light">IP66</li>
            <li className="!font-light">RGB 256</li>
          </ul>
        </div>
        <div>
          <Image
            src="/productspage/sensortof.png"
            alt="Fast Sensor"
            width={310}
            height={255}
            className="object-cover mt-5 md:mt-15"
          />
        </div>
      </div>
      <h2 className="!font-bold md:!text-[27px] max-w-[550px]">Single Space APGS Infra-Red Sensor Time of Flight(TOF)</h2>
        <Image
            src="/productspage/sensortof2.png"
            alt="sensor diagram"
            width={489}
            height={191}
            className="object-cover mt-5 mb-10 md:mb-25"
          />
            <h2 className="!font-bold md:!text-[27px] max-w-[550px] mb-5">Double Space APGS Infra-Red Sensor Time of Flight(TOF)</h2>
        <Image
            src="/productspage/sensortof3.png"
            alt="double space sensor diagram"
            width={600}
            height={123}
            className="object-cover mt-5 mb-10 md:mb-30"
          />
          <LongLineBreak />

    </section>
  );
}
