import React from 'react'
import { Link } from 'react-router-dom'
import Collection from './../components/Collection'
import PrivateRoute from './../components/PrivateRoute'

const Header = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">
                <Link to="/" className="p-2 text-dark">Remote tools</Link>
            </h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <Link to="/collections" className="p-2 text-dark">Collections</Link>
                <Link to="/about" className="p-2 text-dark">About</Link>
                <PrivateRoute authed={true} path='/collections' component={Collection} />
            </nav>
            <Link to="/login" className="btn btn-outline-primary">Login</Link>
        </div>
    )
}

export default Header