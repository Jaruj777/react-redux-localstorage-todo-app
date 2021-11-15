import {  AUTH_EMAIL_ERROR, AUTH_LOGOUT, AUTH_PASSWORD_ERROR, AUTH_SUCCESS } from '../actions/constans'

const initialState = {
    isAuthenticated: false,
    emailError: null,
    passwordError: null

}
const authReducer = (state = initialState,action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                userName: action.payload
            }
        case AUTH_EMAIL_ERROR:
            return {
                ...state,
                emailError: true
            }
        case AUTH_PASSWORD_ERROR:
                return {
                    ...state,
                    passwordError: true
                }
        case AUTH_LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                userName: null,
                emailError: false,
                passwordError: false
            }
    
        default:
            return state
    }
}
export default authReducer