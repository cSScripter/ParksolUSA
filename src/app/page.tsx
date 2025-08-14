import Header from "@/components/Header";
import HomeSection from "@/components/homesection";
import Aipgs from "@/components/aipgs";

export default function Home() {
  return (
    <>
    <div>
      {/* Home Section*/}
    <HomeSection />
    </div>
    {/* AI PARKING GUIDE SYSTEM SECTION */}
    <div>
      <Aipgs />
    </div>
    </>
  );
}