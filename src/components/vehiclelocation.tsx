import Image from "next/image";

export default function VehicleLocation() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20 pb-5 md:pb-24 p-5 mt-5 md:mt-24 border-b border-gray-300">
      <div className="flex flex-col gap-5">
        <h2 className="text-center">
          <span className="font-bold">Efforless</span> Vehicle Location
        </h2>

        <p className="text-center md:text-left p-5">
          Eliminate drivers&apos; frustration by providing
          <br className="hidden md:block" /> our{" "}
          <span className="font-bold">QR code</span> or app-supported vehicle{" "}
          <br className="hidden md:block" />
          finding. No more <span className="font-bold">wasted time</span> or
          energy
          <br className="hidden md:block" /> searching for parked cars - we call
          that a <br className="hidden md:block" />
          <span className="font-bold">win.</span>
        </p>
      </div>
      <div>
        <Image
          src="/girlgarage.avif"
          alt="Man with Machine"
          width={498}
          height={332}
          className="aspect-[498/332] object-cover"
        />
      </div>
    </section>
  );
}
