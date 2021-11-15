import React, { Fragment, useEffect } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import {TransitionGroup,CSSTransition} from 'react-transition-group'
import { loadTodos } from '../../../redux/actions/actionsTodo'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'

function TodoList() {
    const todos = useSelector(state => state.todos.todos)
    const {userName} = useParams()
    const dispatch = useDispatch()
    
 useEffect(() => {
     userName && dispatch(loadTodos(userName))
 }, [dispatch,userName])
 useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(userName))
        const newUserData = {...userData,todos: todos}
        localStorage.setItem(userName, JSON.stringify(newUserData))
}, [todos,userName])
    return (
        <Fragment>
        <h2 className="title text-center my-4">Todo List</h2>
            <TransitionGroup className="todo__list">
                {todos.map((todo,index) => {
                return(
                    <CSSTransition
                    key = {todo.id}
                    timeout={500}
                    classNames="item"
                    >
                        <TodoItem
                        text = {todo.text}
                        num = {index + 1}
                        id = {todo.id}
                        bg = {todo.color}
                        />
                    </CSSTransition>
                )})}
            </TransitionGroup>
        </Fragment>
                
        
    )
}

export default TodoList
