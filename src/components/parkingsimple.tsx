import Image from "next/image";
import Link from "next/link";

export default function ParkingSimple() {
  return (
    <section className="flex flex-col w-full items-center px-5 md:px-20 mb-5 md: md-20 gap-5 mt-5 md:mt-20 border-b border-gray-300">
      <h2 className="text-center">
        Parking Made <span className="font-bold">Simple</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center my-5 gap-5 md:gap-20 mt-5 md:my-20">
        <Image
          src="/parkinggarage.avif"
          alt="Parking Garage Signs"
          width={433}
          height={288}
          className="aspect-[650/430] object-cover"
        />
        <div className="flex flex-col">
          <h3 className="!font-normal text-center md:text-left">
            <span className="font-bold">
              With real-time occupancy displays{" "}
            </span>
            <br className="hidden md:block" />
            and easy-to-follow guidance, drivers
            <br className="hidden md:block" /> can quickly pinpoint open spaces,
            <br className="hidden md:block" />
            which makes parking a breeze. <br className="hidden md:block" />
            <br />
            <br className="block md:hidden" />
            <span className="font-bold">Dynamic LED displays</span> offer an{" "}
            <br className="hidden md:block" />
            uncomplicated and stress-free
            <br className="hidden md:block" /> experience. Just the way it
            should be.
            <br />
            <br />
          </h3>
          <Link
            href="#"
            className="self-start flex-grow-0 bg-[#5e748a] text-white text-xs md:text-lg hover:bg-blue-200 hover:text-black py-1 px-2 md:py-2 md:px-4"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
