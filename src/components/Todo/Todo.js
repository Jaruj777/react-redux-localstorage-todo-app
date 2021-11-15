import React from 'react'
import TodoInput from './TodoInput/TodoInput'
import TodoList from './TodoList/TodoList'

function Todo() {
    return (
        <div className="row">
            <div className="col-12 col-sm-10 col-md-6 mx-auto">
                <div className="todo__wrap">
                    <TodoInput />
                    <TodoList />
                </div>
            </div>
        </div>
    )
}
export default Todo
