import filtersReducer from "./ui/filters_reducer";
import {combineReducers} from 'redux'

const uiReducer = combineReducers({
    filters: filtersReducer
})

export default uiReducer;