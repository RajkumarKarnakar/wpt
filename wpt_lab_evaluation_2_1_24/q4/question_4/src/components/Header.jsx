import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <header classNameName='nav-head'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/login">Login <span className="sr-only">(current)</span></NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}
