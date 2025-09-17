import Image from "next/image";

export default function LongLineBreak() {
    return (
            <div className="w-full max-w-[940px] px-4">
              <Image
                src="/linebreaklong.png"
                alt="Line Break"
                width={924}
                height={14}
                className="object-contain"
              />
            </div>
    )

}