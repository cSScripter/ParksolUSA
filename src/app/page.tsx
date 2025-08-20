import Header from "@/components/Header";
import HomeSection from "@/components/homesection";
import Aipgs from "@/components/aipgs";
import CurrentProjects from "@/components/currentprojects";
import FutureOfParking from "@/components/futureofparking";

export default function Home() {
return (
  <>
    <HomeSection />
    <Aipgs />
    <CurrentProjects />
    <FutureOfParking />
  </>
);
}