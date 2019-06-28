import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cfgReducer from "./cfgReducer";
import tablesReducer from "./tablesReducer";
import tableshlReducer from "./tableshlReducer";
import clientsReducer from "./clientsReducer";

export default combineReducers({
    user: authReducer,
    cfg: cfgReducer,
    tables: tablesReducer,
    tables_hl: tableshlReducer,
    clients: clientsReducer
});
