import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AuthUser from "./AuthUser";
import Deposit from "../pages/deposit";
import DepositCreate from "../pages/deposit/create";
import Withdraw from "../pages/withdraw";
import WithdrawCreate from "../pages/withdraw/create";

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
                                <Link to='/' className="nav-link" >Home</Link>
                            </li>

                            <li className="nav-item active">
                                <Link to='/dashboard' className="nav-link"  >Dashboard</Link>
                            </li>

                            <li className="nav-item active">
                                <Link to='/deposit' className="nav-link" >Deposit</Link>
                            </li>

                            <li className="nav-item active">
                                <Link to='/withdraw' className="nav-link"  >Withdraw</Link>
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
                <Route path="/withdraw" element={<Withdraw />} />
                <Route path="/withdraw/create" element={<WithdrawCreate />} />
            </Routes>
        </div>
    );
};

export default Layout;