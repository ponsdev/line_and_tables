import { FETCH_TABLES } from "../actions/types";

export default function(state = null, action) {
    // console.log(action);
    switch (action.type) {
        case FETCH_TABLES:
            return action.payload || false;
        default:
            return state;
    }
}
