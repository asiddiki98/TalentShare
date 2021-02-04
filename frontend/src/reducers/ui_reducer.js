import filtersReducer from "./ui/filters_reducer";
import modal from './modal_reducer'
import {combineReducers} from 'redux'

const uiReducer = combineReducers({
    filters: filtersReducer,
    modal
})

export default uiReducer;