
import React, {useState} from 'react';
import AuthUser from "../Components/AuthUser";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const {http,setToken} = AuthUser();


    const [email,setEmail] = useState();
    const [name,setName] = useState()
    const [account_type,setAccountType] = useState()
    const [password,setPassword] = useState()
    const [password_confirmation,setPasswordConfirmation] = useState()
    const [error,setError] = useState()



    const handleSubmit = (e) => {
        e.preventDefault();
        http.post('/register',{
            name: name,
            email: email,
            account_type: account_type,
            password: password,
            password_confirmation: password_confirmation
        }).then(res => {
            toast.success('Registration Successful');
            navigate('/login')
        }).catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
                if (response.data?.errors) {
                    const errors = response.data.errors;
                    for (const key in errors) {
                        console.log(errors[key][0])
                        toast.error(errors[key][0]);
                    }
                }
            }
        })
    }
    return (
    <>
        <div className="main-body ">
        <div className="login-container">

            <h2 className="mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">User Name</label>
                    <input type="text"
                           className="form-control"
                           id="name"
                           placeholder="Enter your Email"
                           onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email"
                           className="form-control"
                           id="email"
                           placeholder="Enter your Email"
                           onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <select className="form-control"
                            onChange={e => setAccountType(e.target.value)}
                    >
                        <option value="">Select Account Type</option>
                        <option  value="Individual">Individual</option>
                        <option value="Business">Business</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password"
                           className="form-control"
                           id="password"
                           placeholder="Enter your password"
                           onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password"
                           className="form-control"
                           id="password"
                           placeholder="Enter your confirm  password"
                           onChange={e => setPasswordConfirmation(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
        </div>
        </div>
    </>
    );
};

export default Login;