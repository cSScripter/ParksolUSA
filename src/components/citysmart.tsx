import Image from "next/image";

export default function CitySmart() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20 p-5 my-5 md:my-24">
      <div>
        <Image
          src="/citysmart.avif"
          alt="Man with Machine"
          width={498}
          height={332}
          className="aspect-[498/332] object-cover"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-center">
          Making Cities <span className="font-bold">Smarter</span>
        </h2>
        <p className="text-center md:text-left">
          Using up-to-date <span className="font-bold">data intelligence</span>{" "}
          and <br className="hidden md:block" /> analytics, cities are able to
          improve on <br className="hidden md:block" />
          residents' daily life by{" "}
          <span className="font-bold">implementing</span>
          <br className="hidden md:block" /> better communication, travel
          versatility,
          <br className="hidden md:block" /> and safety services. Smarter
          parking is
          <br className="hidden md:block" />
          <span className="font-bold"> smarter living.</span>
        </p>
      </div>
    </section>
  );
}
