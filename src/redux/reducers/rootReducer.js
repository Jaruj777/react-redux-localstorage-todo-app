import {combineReducers} from 'redux'
import todoReducer from './todoReducer'
import authReducer from './authReducer'
import appReducer from './appReducer'

const rootReducer = combineReducers({
    todos: todoReducer,
    auth: authReducer,
    messageApp: appReducer,
})
export default rootReducer