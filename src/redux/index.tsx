import { combineReducers } from "redux";
import { authReducer } from "./auth/reducer";
import { mainReducer } from "./main/reducer";

const reducers = combineReducers({auth: authReducer, main: mainReducer});

export {reducers};