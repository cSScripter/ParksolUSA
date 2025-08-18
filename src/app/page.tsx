import Header from "@/components/Header";
import HomeSection from "@/components/homesection";
import Aipgs from "@/components/aipgs";
import CurrentProjects from "@/components/currentprojects";

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
    <div>
      <CurrentProjects />
    </div>
    </>
  );
}