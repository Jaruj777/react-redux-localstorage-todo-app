import React from 'react'
import { useSelector } from 'react-redux'

function Alert() {
    const {isAlert,textAlert} = useSelector(state => state.messageApp)
    return (
        <div className="app__alert">
            <div className ="row">
                <div className ="col">
                    <div className={`alert alert-danger my-5 ${!isAlert && 'opacity-0'}`} role="alert">
                    {textAlert}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alert
