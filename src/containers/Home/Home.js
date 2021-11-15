import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className="offer">
            <div className="row flex-column">
                <div className="col text-center">
                    <h1 className="offer__title">Welcom in todo app</h1>
                </div>
                <div className="col d-flex justify-content-center py-5">
                    <Link to="/login" className="btn btn-outline-success mx-2">Sign in</Link>
                    <Link to="/register" className="btn btn-outline-primary mx-2">Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
