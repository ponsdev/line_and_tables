import axios from "axios";
import {
    FETCH_USER,
    FETCH_CFG,
    FETCH_TABLES,
    FETCH_COPIA,
    FETCH_CLIENTS
} from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchConfig = () => async dispatch => {
    const res = await axios.get("/api/config");
    dispatch({ type: FETCH_CFG, payload: res.data });
};

export const fetchTables = () => async dispatch => {
    const res = await axios.get("/api/tables");
    var res_hl = Object.assign([], res);
    dispatch({ type: FETCH_TABLES, payload: res.data });
    dispatch({ type: FETCH_COPIA, payload: res_hl.data });
};

export const updateTables = state => dispatch => {
    var state_hl = Object.assign([], state);
    dispatch({ type: FETCH_TABLES, payload: state });
    dispatch({ type: FETCH_COPIA, payload: state_hl });
};

export const highlightTables = state => dispatch => {
    dispatch({ type: FETCH_COPIA, payload: state });
};

export const fetchClients = () => async dispatch => {
    const res = await axios.get("/api/clients");
    dispatch({ type: FETCH_CLIENTS, payload: res.data });
};

export const updateClients = state => async dispatch => {
    dispatch({ type: FETCH_CLIENTS, payload: state });
};
