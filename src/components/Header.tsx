import Image from "next/image";

export default function Header() {
    return (
<header className="flex justify-center p-6">
  <div className="relative w-full max-w-[300px] sm:max-w-[498px] aspect-[1052/242]">
        <Image
        src="/parksollogodark.png"
        alt="Logo"
        fill
        style={{ objectFit: "contain" }}
        priority
        />
  </div>
</header>
    )
}