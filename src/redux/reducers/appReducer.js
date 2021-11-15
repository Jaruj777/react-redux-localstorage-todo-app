import { HIDE_ALERT, SHOW_ALERT } from "../actions/constans"

const initialState = {
    isAlert: false,
    textAlert: null
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                isAlert: true,
                textAlert: action.payload
            }
        case HIDE_ALERT:
            return {
                ...state,
                isAlert: false,
                textAlert: ''
            }
        default: return state
    }
}
export default appReducer