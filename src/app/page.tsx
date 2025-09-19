import Header from "@/components/Header";
import HomeSection from "@/components/homepage/homesection";
import Aipgs from "@/components/homepage/aipgs";
import CurrentProjects from "@/components/homepage/currentprojects";
import FutureOfParking from "@/components/homepage/futureofparking";
import ParkSoft from "@/components/homepage/parksoft";
import InnovativeSolutions from "@/components/homepage/innovativesolutions";
import ParkingSimple from "@/components/homepage/parkingsimple";
import CitySmart from "@/components/homepage/citysmart";
import VehicleLocation from "@/components/homepage/vehiclelocation";
import OurPartners from "@/components/ourpartners";

export default function Home() {
return (
  <>
    <HomeSection />
    <Aipgs />
    <CurrentProjects />
    <FutureOfParking />
    <ParkSoft />
    <InnovativeSolutions />
    <ParkingSimple />
    <CitySmart />
    <VehicleLocation />
    <OurPartners />
  </>
);
}