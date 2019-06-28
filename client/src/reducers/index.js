import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cfgReducer from "./cfgReducer";
import tablesReducer from "./tablesReducer";
import clientsReducer from "./clientsReducer";

export default combineReducers({
    user: authReducer,
    cfg: cfgReducer,
    tables: tablesReducer,
    clients: clientsReducer
});
