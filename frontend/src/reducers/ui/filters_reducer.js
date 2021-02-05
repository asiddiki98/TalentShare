import { CLICK_MESSAGE, OPENED_MESSAGE , CLICK_POST, REMOVE_SHOW} from "../../actions/filter_action";

const defaultState = {
    messaging: null,
    postId: null
}

const filtersReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type){
        case CLICK_MESSAGE:
            return Object.assign({}, state, {messaging: action.userId})
        case OPENED_MESSAGE:
            return Object.assign({},state, {messaging : null});
        case CLICK_POST:
            return Object.assign({}, state, {postId: action.postId});
        case REMOVE_SHOW:
            return Object.assign({},state, {postId : null});
        default:
            return state;
    }


}

export default filtersReducer;