export const SET_LOGIN_USER = "SET_LOGIN_USER";

type IUser = {
    email:string;
    name: string;
}

export const setLoginUser = (user:IUser)=>({type: SET_LOGIN_USER, payload: user});