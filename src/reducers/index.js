import { combineReducers } from 'redux'
import myReducer from './myReducer'
import count from './count'

export default combineReducers({
    myReducer,
    count
})