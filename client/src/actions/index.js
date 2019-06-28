import axios from "axios";
import { FETCH_USER, FETCH_CFG, FETCH_TABLES, FETCH_CLIENTS } from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchConfig = () => async dispatch => {
    const res = await axios.get("/api/config");
    console.log(res.data);
    dispatch({ type: FETCH_CFG, payload: res.data });
};

export const fetchTables = () => async dispatch => {
    const res = await axios.get("/api/tables");
    dispatch({ type: FETCH_TABLES, payload: res.data });
};

export const updateTables = state => dispatch => {
    dispatch({ type: FETCH_TABLES, payload: state });
};

export const fetchClients = () => async dispatch => {
    const res = await axios.get("/api/clients");
    dispatch({ type: FETCH_CLIENTS, payload: res.data });
};

export const updateClients = state => async dispatch => {
    dispatch({ type: FETCH_CLIENTS, payload: state });
};
