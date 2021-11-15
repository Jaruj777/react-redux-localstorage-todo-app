import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo} from '../../../redux/actions/actionsTodo'

function TodoInput() {
    const [value,setValue] = useState('')
    const dispatch = useDispatch()
    const random = (n) => Math.floor(Math.random()*n)
    const cls =['#5b0fd5','#b95d10','#0f5132','#488bc7','#055160','#e4511380','#ec8787']
    const handlerOnClick = () => {
        if(value.trim()==='') return   
        const todo = {
            id: random(20000),
            text: value,
            color: cls[random(7)]
        }
        dispatch(addTodo(todo))
        setValue('')
    }
    return (
       
           <div className="todo__input d-flex mt-2">
                <input 
                className="form-control" 
                type="text"
                placeholder="Enter to task"
                value={value}
                onChange={e=>setValue(e.target.value)}
                />
                <button 
                type="button" 
                className="btn btn-primary mx-3"
                onClick={handlerOnClick}
                >
                Add
                </button>
            </div>
          
       
    )
}

export default TodoInput
