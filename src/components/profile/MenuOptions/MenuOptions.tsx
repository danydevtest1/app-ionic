import {IonContent, IonModal} from '@ionic/react'
import {imageOutline,personCircleOutline} from "ionicons/icons";
import {Camera,CameraResultType,CameraSource} from "@capacitor/camera";
import {useUser} from "../../../hooks";
import {Options} from "./Options"

import "./MenuOptions.scss";

export function MenuOptions() {
const {onChangeAvatar} = useUser();

    const openCamera=async()=>{
        const response= await Camera.getPhoto({
            resultType:CameraResultType.Uri,
            source:CameraSource.Camera,
            quality:100
        });

    if(response.webPath){
        onChangeAvatar(response.webPath)
    }
        
    }
  return (
    <div className='menu-options-container'>
        <Options titulo="Cambiar avatar" icon={imageOutline} onClick={openCamera}/>
        <Options titulo="Cambiar nombre" icon={personCircleOutline} onClick={()=>console.log("")}/>
    </div>
  )
}
