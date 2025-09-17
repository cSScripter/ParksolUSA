import Image from "next/image";

export default function MainControlPanel() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-5 mb-15">
      <h2 className="!font-bold md:!text-[27px] mb-15">
        Main Control Panel for APGS Camera
      </h2>
      <div className="flex flex-col md:flex-row gap-2 max-w-[940px]">
        <Image
          src="/productspage/maincontrolpanel.png"
          alt="pod at different angles"
          width={451}
          height={343}
          className="object-cover"
        />
        <div className="mcp-list flex flex-col gap-5 max-w-[380px]">
          <h2 className="!font-bold md:!text-[27px] pt-2">
            Benefits and Features
          </h2>
          <ul className="text-left list-disc pl-5 md:pl-15">
            <li>SNMP protocol-based remote management</li>
            <li>Field and remote upgradeable</li>
            <li>Event logging and storage of the last 5000 events</li>
            <li>
              Two 48 ethernet ports supported by on-board ethernet PoE+ switch
              expandable to 256 ports
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-15 text-center max-w-[840px]">
        <p>
          <span className="font-bold">MCP - CAM</span> provides comprehensive <span className="font-bold">management</span> and <span className="font-bold">control</span> for the
          ParksolUSA APGS (Automated Parking Guidance System) to be used with
          our <span className="font-bold">PODs camera system</span> and all sub-control panels, GPUs, sensors,
          redundancy switches, power supplies, and communication interfaces.
          This specific control panel is intended for use as the <span className="font-bold">Main Control Panel</span> in a single structure, which serves as the main gateway for the
          network.
        </p>
        <p>The Main Control Panel will offer the following <span className="font-bold">features</span>:</p>
        <ul className="text-left list-disc pl-5 md:pl-15">
          <li>Pushing and pulling data.</li>
          <li>Remote login for service.</li>
          <li>Remote login for operations.</li>
        </ul>

        <p>
          Additionally, the <span className="font-bold">Main Control Panel</span> will be equipped with an{" "}
          <span className="font-bold">automated</span> notification system back to the ParksolUSA service team. It
          will also command and communicate with other sub-control panels
          connected to the network.
        </p>
        <p>
          This model is designed for the ParksolUSA camera system, which
          provides <span className="font-bold">License Plate Recognition</span> in every parking space and monitors
          the occupancy of each space. Great consideration was taken to ensure
          that the <span className="font-bold">Main Control Panel</span> remains scalable, allowing for space
          reservation, CCTV, and future equipment purchases within the range of
          ParksolUSA products.
        </p>
      </div>
    </section>
  );
}
