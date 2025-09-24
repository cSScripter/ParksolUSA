import APGSSystem from "@/components/productspage/APGSsystem"; 
import MainControlPanel from "@/components/productspage/maincontrolpanel";
import SensorsAndCameras from "@/components/productspage/sensorsandcameras";
import DirectionalLEDSigns from "@/components/productspage/directionalledsigns";
import LEDSigns from "@/components/productspage/ledsigns";
export default function ProductsPage() {
    return (
    <>
     <APGSSystem /> 
     <MainControlPanel />
     <SensorsAndCameras />
     <DirectionalLEDSigns />
     <LEDSigns />
     </>
    )
}