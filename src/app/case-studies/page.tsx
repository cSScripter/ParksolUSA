import ShortLineBreak from "@/components/shortlinebreak";
import Image from "next/image";

export default function CaseStudiesPage() {
    return (
        <section className="flex flex-col items-center pt-10 md:pb-20 md:pt-30 px-5 md:px-20 text-center">
            <h2 className="!font-bold m-2 !text-[38px] md:!text-[44px]">Case Studies</h2>
            <ShortLineBreak />
            <h2 className="mt-10 mb-5 md:mt-30 md:mb-15">The <span className="font-bold">Ritz-Carlton</span> at Half Moon Bay, CA</h2>
              <Image
      src="/RitzCase.png"
      alt="Ritz Case Study"
      width={980}
      height={1375}
      quality={100}
      priority         
      className="object-contain p-5"
    />

        </section>
    );
}