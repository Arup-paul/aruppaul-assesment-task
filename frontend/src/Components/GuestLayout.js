import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login";
import Layout from "./Layout";
import Dashboard from "../pages/Dashboard";

const GuestLayout = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg d-flex justify-content-center navbar-dark">
                <div className="container">

                    <div className="collapse navbar-collapse navbar-nav-center" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to='/' className="nav-link" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login'  className="nav-link" href="#">Login </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Register</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login />  } />
            </Routes>
        </div>
    );
};

export default GuestLayout;