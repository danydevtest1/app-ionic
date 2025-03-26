import {IonPage, IonContent} from "@ionic/react";
import {ListaActividades} from '../components/Actividades';
import {Header} from "../components/Header"

export function Home()  {
 
  return (
   <IonPage>
    <Header/>
    <IonContent>
      <ListaActividades/>
    </IonContent>
   </IonPage>
  );
};


