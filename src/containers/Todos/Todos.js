import React from 'react'
import { useDispatch } from 'react-redux'
import Todo from '../../components/Todo/Todo'
import { logout} from '../../redux/actions/actionAuth'


function Todos() {
    const dispatch = useDispatch()
    return (
        <div className="todos py-5">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                    <button 
                    className="btn btn-outline-secondary"
                    onClick={() => dispatch(logout())}
                    >
                        Logout
                    </button>
                    </div>
                </div>
                <Todo />
            </div>
        </div>
    )
}

export default Todos
