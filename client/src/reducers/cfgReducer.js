import { FETCH_CFG } from "../actions/types";

export default function(state = null, action) {
    // console.log(action);
    switch (action.type) {
        case FETCH_CFG:
            return action.payload || false;
        default:
            return state;
    }
}
