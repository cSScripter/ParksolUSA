import Header from "@/components/Header";
import HomeSection from "@/components/homesection";
import Aipgs from "@/components/aipgs";
import CurrentProjects from "@/components/currentprojects";
import FutureOfParking from "@/components/futureofparking";
import ParkSoft from "@/components/parksoft";
import InnovativeSolutions from "@/components/innovativesolutions";

export default function Home() {
return (
  <>
    <HomeSection />
    <Aipgs />
    <CurrentProjects />
    <FutureOfParking />
    <ParkSoft />
    <InnovativeSolutions />
  </>
);
}