import { FETCH_TABLES } from "../actions/types";

export default function(state = [], action) {
    // console.log(action);
    switch (action.type) {
        case FETCH_TABLES:
            return action.payload || false;
        default:
            return state;
    }
}
