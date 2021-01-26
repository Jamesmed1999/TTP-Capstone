import { combineReducers } from 'redux'     // combineReducers: use more than one reducer; 
import sidebarReducer from './sidebarReducer'

const allReducers = combineReducers({
    sidebar: sidebarReducer
})
export default allReducers;