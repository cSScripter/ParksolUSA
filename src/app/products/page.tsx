import APGSSystem from "@/components/productspage/APGSsystem"; 
import MainControlPanel from "@/components/productspage/maincontrolpanel";
import SensorsAndCameras from "@/components/productspage/sensorsandcameras";
import DirectionalLEDSigns from "@/components/productspage/directionalledsigns";
import LEDSigns from "@/components/productspage/ledsigns";
import OutdoorSigns from "@/components/productspage/outdoorsigns";
import IndoorSigns from "@/components/productspage/indoorsigns";
import ParkingBarriers from "@/components/productspage/parkingbarriers";
export default function ProductsPage() {
    return (
    <>
     <APGSSystem /> 
     <MainControlPanel />
     <SensorsAndCameras />
     <DirectionalLEDSigns />
     <LEDSigns />
     <OutdoorSigns />
     <IndoorSigns />
     <ParkingBarriers />
     </>
    )
}