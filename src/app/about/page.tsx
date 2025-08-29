import Image from "next/image";
export default function AboutUs() {
  return (
    <section className="flex flex-col justify-center items-center gap-10 md:gap-15 md:pb-24 p-5 mt-5 md:mt-15">
      <h2 className="text-center mb-5">
        Welcome to <span className="font-bold">Unparalleled</span> Parking
      </h2>
      <div className="relative aspect-square w-full max-w-[250px] md:max-w-[382px]">
        <Image
          src="/omerheadshot.avif"
          alt="Omer Shloush Picture"
          fill
          className="object-contain"
        />
      </div>
      <p className="!text-[18px]">Owner and CEO, Omer Shloush</p>
      <div className="flex flex-col gap-5 max-w-[900px]">
        <p>
          Headquartered in Scottsdale, AZ, ParksolUSA is a leading provider of
          advanced Parking Guidance Systems (PGS) featuring AI detection through
          live camera feeds. Our company, specializing in both software and
          hardware innovation, tailors products for the USA parking industry.
        </p>
        <p>
          We design and continue to develop products that address and resolve
          parking challenges for operators, owners, and drivers. By
          incorporating our products with existing ones, we monitor various
          parking spaces, including single spaces, nested areas, outdoor/indoor,
          EV, premium, valet, and reserved spaces.
        </p>
        <p>
          Looking forward, the management of parking lots and garages from an
          individual parking space perspective is the future, and we are already
          positioned there. Recognizing the impact of each space on financials,
          occupancy, and security is reshaping the industry. The use of AI
          scenario modeling automates parking facilities when integrating PGS,
          PARKS, and associated products.
        </p>
        <p>
          AI scenario modeling offers limitless solutions for upcoming products.
          The hardware we use, with thousands of hours of trained files,
          establishes a solid foundation for future expansion into areas such as
          safety, security, service, and beyond.
        </p>
      </div>
    </section>
  );
}
