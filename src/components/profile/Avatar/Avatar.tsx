import {IonAvatar, IonText} from '@ionic/react';
import {avatar} from '../../../assets'
import "./Avatar.scss";

export function Avatar() {
  return (
    <div className="container-avatar">
        <IonAvatar>
            <img src={avatar}/>
        </IonAvatar>
        <IonText color="dark">Nombre</IonText>
    </div>
  )
}
