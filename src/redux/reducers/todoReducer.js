import { ADD_TODO, CLEAR_TODO_LIST, DELETE_TODO, FETCH_TODO_DATA, UPDATE_TODO } from "../actions/constans"

const initialState = {
    todos: []
}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case CLEAR_TODO_LIST:
            return {
                ...state,
                todos:[]
            }
        case UPDATE_TODO:
            return{
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id
                                            ?{...todo,text:action.payload.text}
                                            :todo
                                            )
            }
        case FETCH_TODO_DATA:
            return {
                ...state,
                todos: action.payload
            }
        default: return state
    }
}
export default todoReducer