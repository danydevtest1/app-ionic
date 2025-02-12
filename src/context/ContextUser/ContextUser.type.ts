export namespace ContextUserTypes{
    export type Props={
        children:JSX.Element;
    }

    export type Context={
        username:string;
        avatar:string;
        onChangeUserName:(username:string)=>void;
        onChangeAvatar:(avatar:string)=>void;
    }
}