import { CLICK_MESSAGE, OPENED_MESSAGE } from "../../actions/filter_action";

const defaultState = {
    messaging: null
}

const filtersReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type){
        case CLICK_MESSAGE:
            return Object.assign({}, state, {messaging: action.userId})
        case OPENED_MESSAGE:
            return Object.assign({},state, {messaging : null});
            
        default:
            return state;
    }


}

export default filtersReducer;