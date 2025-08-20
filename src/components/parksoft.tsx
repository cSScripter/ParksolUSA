import Image from "next/image";

export default function ParkSoft() {
    return (
<section className="relative w-full h-[40vw] pb-100">
<Image
        src="/parksoftbg.png"
        alt="bluebg"
        fill
        style={{ objectFit: "cover" }}
        priority
        />
        

</section>
    );
}