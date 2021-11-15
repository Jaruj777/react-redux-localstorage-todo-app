import {ADD_TODO, CLEAR_TODO_LIST, DELETE_TODO, FETCH_TODO_DATA, UPDATE_TODO} from './constans'

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}
export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}
export const clearTodoList = () => {
    return {
        type: CLEAR_TODO_LIST
    }
}
export const updateTodo = (id,text) => {
    return {
        type: UPDATE_TODO,
        payload: {
            id,
            text
        }
    }
}
export const fetchTodosData = data => {
    return {
        type: FETCH_TODO_DATA,
        payload: data
    }
}
export const loadTodos = (userName) => {
    return dispatch => {
        try{
            const userData = JSON.parse(localStorage.getItem(userName));
            dispatch(fetchTodosData(userData.todos))
        }
        catch{
            console.log('У даного пользователя еще нету никаких заданий на сегодня')
        }
    }
}
