import APGSSystem from "@/components/productspage/APGSsystem"; 
import MainControlPanel from "@/components/productspage/maincontrolpanel";
import SensorsAndCameras from "@/components/productspage/sensorsandcameras";
import DirectionalLEDSigns from "@/components/productspage/directionalledsigns";
export default function ProductsPage() {
    return (
    <>
     <APGSSystem /> 
     <MainControlPanel />
     <SensorsAndCameras />
     <DirectionalLEDSigns />
     </>
    )
}