import Image from "next/image";
import OurPartners from "@/components/ourpartners";
export default function AboutUs() {
  return (
    <section className="flex flex-col justify-center items-center gap-10 md:gap-15 p-5 mt-5 md:mt-15">
      <h2 className="text-center mb-5">
        Welcome to <span className="font-bold">Unparalleled</span> Parking
      </h2>
      <div>
        <Image
          src="/omerheadshot.avif"
          alt="Omer Shloush Picture"
          width={382}
          height={382}
          className="object-contain aspect-square"
        />
      </div>
      <p className="!text-[18px]">Owner and CEO, Omer Shloush</p>
      <div className="flex flex-col gap-5 max-w-[850px]">
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
        <p className="!font-bold my-10 md:my-20">Experience - Under our belt since 2019, we have completed and continue to service:</p>
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row">
           <ul className="list-none text-center md:text-left flex-1 experience-list">
  <li>2019 City of Davis</li>
  <li>2020 Hoover Dam</li>
  <li>2019 Samsung HQ Plano TX</li>
  <li>2022 Ritz Carlton Half Moon Bay</li>
</ul>

<ul className="list-none text-center md:text-right flex-1 experience-list">
  <li>2021 Phoenix Airport</li>
  <li>2020 Runway Mall</li>
  <li>2023 City of Ventura</li>
  <li>2023 LAWA - CTA Garages</li>
</ul>
        </div>
        <p className="mt-5 md:mt-20">Developing and installing these projects helps us to understand who we are, learning what to do and more importantly what not to do. Realizing where we are strong is paving the road to our future.</p>
      </div>
<OurPartners />
    </section>
  );
}
