import Image from "next/image";

export default function ShortLineBreak() {
  return (
    <div className="w-full max-w-[461px] px-4">
      <Image
        src="/linebreakshort.png"
        alt="Line Break"
        width={461}
        height={17}
        className="object-contain"
      />
    </div>
  );
}