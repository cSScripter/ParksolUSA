import Image from "next/image";
import NavBar from "./navbar";

export default function Header() {
    return (
 
<header className="flex flex-col justify-center items-center p-5 space-y-2">
  <div className="relative w-full max-w-[300px] sm:max-w-[498px] aspect-[1052/242]">
        <Image
        src="/parksollogodark.png"
        alt="Logo"
        fill
        style={{ objectFit: "contain" }}
        priority
        />
  </div>
  <NavBar />
</header>
    )
}