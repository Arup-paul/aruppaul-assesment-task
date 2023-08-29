import React, {useState} from 'react';

const Login = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email,password)
    }
    return (
    <>
        <div className="login-body  ">
        <div className="login-container">
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
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
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password"
                           className="form-control"
                           id="password"
                           placeholder="Enter your password"
                           onChange={e => setPassword(e.target.value)}
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