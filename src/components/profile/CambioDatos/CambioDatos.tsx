import { useRef } from "react";
import { IonInput, IonButton } from "@ionic/react";
import { useFormik } from "formik";
import * as YUP from "yup";
import { useUser } from "../../../hooks";

import { CambioDatosType } from "./CambioDatos.type";

import "./CambioDatos.scss";

export function CambioDatos(props: CambioDatosType.Props) {
  const { onClose } = props;
  const { onChangeUserName } = useUser();

  const inputRef = useRef<HTMLIonInputElement>(null);

  const formik = useFormik({
    initialValues: { name: "" },
    validationSchema: YUP.object({
      name: YUP.string().required("danger"),
    }),
    onSubmit: (formValue) => {
      console.log(formValue.name);
      onChangeUserName(formValue.name);
      onClose();
    },
  });

  return (
    <div className="change-dato">
     
      <IonInput
      name="nombre"
        placeholder="ingresa nombre"
        ref={inputRef}
        value={formik.values.name}
        color={formik.errors.name}
        onIonChange={(e) => formik.setFieldValue("name", e.detail.value)}
      />
      <IonButton expand="block" onClick={()=>formik.handleSubmit()}>
        Enviar...
      </IonButton>
    </div>
  );
}
