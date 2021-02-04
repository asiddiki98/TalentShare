import filtersReducer from "./ui/filters_reducer";
import modal from './ui/modal_reducer';
import content from './ui/content_reducer';
import {combineReducers} from 'redux'

const uiReducer = combineReducers({
    filters: filtersReducer,
    modal,
    content
})

export default uiReducer;