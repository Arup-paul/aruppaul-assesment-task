import React from 'react';
import {useNavigate} from "react-router-dom";
import AuthUser from "../Components/AuthUser";

const Dashboard = () => {
    const {user} = AuthUser();


    return (
        <div className="main-body">
        <div className="user-info-container">
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{user?.name}</h5>
                        <p className="card-text">Account Type: {user?.account_type}</p>
                        <p className="card-text">Balance: {user?.balance}</p>
                    </div>
            </div>
        </div>
        </div>


    );
};

export default Dashboard;