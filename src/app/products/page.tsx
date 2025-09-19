import APGSSystem from "@/components/productspage/APGSsystem"; 
import MainControlPanel from "@/components/productspage/maincontrolpanel";
import SensorsAndCameras from "@/components/productspage/sensorsandcameras";
export default function ProductsPage() {
    return (
    <>
     <APGSSystem /> 
     <MainControlPanel />
     <SensorsAndCameras />
     </>
    )
}