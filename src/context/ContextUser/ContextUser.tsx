import { useState, useEffect, createContext } from "react";
import { ContextUserTypes } from "./ContextUser.type";

export const ContextUser = createContext<ContextUserTypes.Context>({
  username: "",
  avatar: "",
  onChangeUserName: () => {},
  onChangeAvatar: () => {},
});

export function ProviderUser(props: ContextUserTypes.Props) {
  const { children } = props;

  //Estados de variables
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  const onChangeUserName = (username: string) => {
    console.log("camnbio de nombre de usuario");
  };

  const onChangeAvatar=(avatar:string)=>{
    console.log("Cambio de avatar");
    
  }

  const valueContext: ContextUserTypes.Context = {
    username,
    avatar,
    onChangeUserName,
    onChangeAvatar,
  };

  return (
    <ContextUser.Provider value={valueContext}>{children}</ContextUser.Provider>
  );
}
