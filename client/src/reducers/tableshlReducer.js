import { FETCH_COPIA } from "../actions/types";

export default function(state = [], action) {
    console.log(action);
    switch (action.type) {
        case FETCH_COPIA:
            return action.payload || false;
        default:
            return state;
    }
}
