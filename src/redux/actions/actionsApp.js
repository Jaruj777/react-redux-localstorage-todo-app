import { HIDE_ALERT, SHOW_ALERT } from "./constans"

export const showAlert = text => {
    return {
        type: SHOW_ALERT,
        payload: text
    }
}
export const hideAlert = () => {
    return {
        type: HIDE_ALERT
    }
}