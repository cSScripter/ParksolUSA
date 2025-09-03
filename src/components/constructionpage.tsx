import Image from "next/image"

export default function ConstructionPage() {
    return (
<section className="flex flex-col items-center justify-center text-center gap-5 my-5 md:my-15 p-5">
    <h2>This page is currently<br /> under <span className="font-bold">construction</span> </h2>
    <Image
        src="/construction.png"
        alt="Page under construction"
        width={380}
        height={300}
        className="object-contain" />
</section>
    )
}