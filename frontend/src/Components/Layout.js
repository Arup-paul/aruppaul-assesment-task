import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import GuestLayout from "./GuestLayout";
import Home from "../pages/Home";
import Login from "../pages/login";
import Dashboard from "../pages/Dashboard";
import AuthUser from "./AuthUser";
import Deposit from "../pages/deposit";
import DepositCreate from "../pages/deposit/create";

const Layout = () => {
    const {token,logout} = AuthUser();


    const handleLogout = () => {
         window.confirm("Are you sure you want to logout?")
             if(token !== undefined){
                    logout();
             }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg d-flex justify-content-center navbar-dark">
                <div className="container">

                    <div className="collapse navbar-collapse navbar-nav-center" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to='/' className="nav-link" href="#">Home</Link>
                            </li>

                            <li className="nav-item active">
                                <Link to='/dashboard' className="nav-link" href="#">Dashboard</Link>
                            </li>

                            <li className="nav-item active">
                                <Link to='/deposit' className="nav-link" href="#">Deposit</Link>
                            </li>


                            <li className="nav-item active">
                                <span className="nav-link" onClick={handleLogout}>Logout</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/deposit" element={<Deposit />} />
                <Route path="/deposit/create" element={<DepositCreate />} />
            </Routes>
        </div>
    );
};

export default Layout;