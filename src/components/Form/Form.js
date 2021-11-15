import React, {useEffect, useRef, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout, signIn, signUp } from '../../redux/actions/actionAuth'
import Alert from '../Alert'

function Form() {
   const history = useHistory()
   const isLoginForm = history.location.pathname==='/login'
   const {isAuthenticated,emailError,passwordError} = useSelector(state => state.auth)
   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const refInput = useRef()

    let isDisabled = email.trim()===''||password.trim()===''

    const handleSubmit = e => {
        e.preventDefault()
        isLoginForm
            ?dispatch(signIn({email,password}))
            :dispatch(signUp({email,password,todos:[]}))
        if(!isAuthenticated){
            setPassword('')
            return
        }
        setEmail('') 
        setPassword('')
    }
  
    const focus = () => refInput.current.focus()
    useEffect (() => {
        focus()
    },[])
    useEffect (() => {
        dispatch(logout())
    },[dispatch])
    return (
        <div className="row">
            <div className="col-md-6 col-lg-4 mx-auto">
                <form className="auth__form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input 
                            ref={refInput}
                            type="email" 
                            className={`form-control ${emailError && 'is-invalid'}`}
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input 
                            type="password" 
                            className={`form-control ${passwordError && 'is-invalid'}`}
                            id="exampleInputPassword1"
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success" disabled={isDisabled}>{isLoginForm?'Sign in':'Sign up'}</button>
                </form>
                <Alert /> 
            </div>
        </div>
    )
}
export default Form
