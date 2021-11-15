import React from 'react'
import {Link} from 'react-router-dom'
import Form from '../../components/Form/Form'

function Auth() {
    

    return (
        <div className="auth">
            <div className="row">
                <div className="col text-center">
                <Link to = "/" className="btn btn-outline-secondary my-3">Home</Link>
                </div>
            </div>
            <Form />
        </div>
    )
}

export default Auth
