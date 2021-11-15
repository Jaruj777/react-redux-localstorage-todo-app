import { hideAlert, showAlert } from "./actionsApp"
import { clearTodoList } from "./actionsTodo"
import { AUTH_EMAIL_ERROR, AUTH_LOGOUT, AUTH_PASSWORD_ERROR, AUTH_SUCCESS } from "./constans"

export const authSuccess = userName => {
    return {
        type: AUTH_SUCCESS,
        payload: userName
    }
}

export const logout = () => {
    return dispatch => {
        dispatch({type: AUTH_LOGOUT})
        dispatch(hideAlert())
        dispatch(clearTodoList())
    }
}
export const signIn = user => {
    return dispatch => {
        if(localStorage.getItem(user.email)!==null){
            const data = JSON.parse(localStorage.getItem(user.email))
            if(user.password === data.password){
                dispatch(authSuccess(user.email))
            }else{
                dispatch({type:AUTH_PASSWORD_ERROR})
                dispatch(showAlert('You entered an incorrect password'))
            }  
        }else{
            dispatch({type:AUTH_EMAIL_ERROR})
            dispatch(showAlert('The user with this email address does not exist'))
        }
      }
    }        
export const signUp = user=> {
    return dispatch => {
       if(localStorage.getItem(user.email)===null){
        localStorage.setItem(user.email, JSON.stringify(user))
        dispatch(authSuccess(user.email))
       }else{
            dispatch({type:AUTH_EMAIL_ERROR})
            dispatch(showAlert('A user with this email address already exists'))
        }  
    }
}      
