import {IonAvatar, IonText} from '@ionic/react';
import {avatar} from '../../../assets'
import "./Avatar.scss";

const nombre:string="Dany Cambrano";

export function Avatar() {
  return (
    <div className="container-avatar">
        <IonAvatar>
            <img src={avatar}/>
        </IonAvatar>
        <IonText color="dark">{nombre}</IonText>
    </div>
  )
}
