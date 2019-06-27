import axios from "axios";
import { FETCH_USER, FETCH_TABLES } from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTables = () => async dispatch => {
    const res = await axios.get("/api/tables");
    dispatch({ type: FETCH_TABLES, payload: res.data });
};

export const updateTables = state => dispatch => {
    dispatch({ type: FETCH_TABLES, payload: state });
};
