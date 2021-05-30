import { SET_LOGIN_USER } from "./actions";

type IActionType = {
    type: string;
    payload: any;
}

const INITIAL = {
    user: {
    }
}

export const authReducer = (state = INITIAL, action:IActionType)=>{

    switch(action.type){
        case SET_LOGIN_USER:
            return {...state, user: action.payload};
        default:
            return state;
    }

}