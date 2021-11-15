import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo,updateTodo } from '../../../redux/actions/actionsTodo'

function TodoItem({text,num,id,bg}) {
    const [value,setValue] = useState(text)
    const [editable, setEditable] = useState(false)
    const dispatch = useDispatch()

    const handlerChange = e => {
        setValue(e.target.value)
    }
    const handlerUpdate = () => {
        if (editable && value !== text){
            dispatch(updateTodo(id,value))
        }
        setEditable(!editable)
    }
    const handlerDelete = () => {
        dispatch(deleteTodo(id))
    }
    
    return (
        <div className="todo__item d-flex flex-column mb-2 p-2" style={{backgroundColor:bg}}>
            <div className="todo__info d-flex mb-3 align-items-center">
                <div className="todo__number text-light mx-4">{num}</div>
                <p  className="todo__text fs-4 text-light m-0">
                    {!editable
                        ?text
                        :<input 
                        className="form-control"
                        type="text" 
                        value={value}
                        onChange={handlerChange}
                        />
                    }
                </p>
            </div>
            <div className="todo__btns d-flex justify-content-end">
                <button
                type="button" 
                className="btn btn-info mx-2"
                onClick={handlerUpdate}
                >
                {editable?'Update':'Edit'}
                </button>
                <button 
                type="button" 
                className="btn btn-warning"
                onClick={handlerDelete}
                >
                Delete
                </button>
            </div>
        </div>
    )
}

export default TodoItem

