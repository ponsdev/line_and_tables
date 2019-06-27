import { combineReducers } from "redux";
import authReducer from "./authReducer";
import tablesReducer from "./tablesReducer";

export default combineReducers({
    user: authReducer,
    tables: tablesReducer
});
