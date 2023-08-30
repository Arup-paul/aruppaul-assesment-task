
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import AuthUser from "../../Components/AuthUser";
import {toast} from "react-toastify";

const Create = () => {
    const navigate = useNavigate();
    const {http,setToken} = AuthUser();


    const [amount,setAmount] = useState();
    const token = sessionStorage.getItem('token');
    const  jwtToken  = JSON.parse(token);

    const handleSubmit = (e) => {
        e.preventDefault();
        http.post('/deposit',{
            amount: amount,
        },{
            headers: {
                Authorization: `Bearer ${jwtToken}` // Include the JWT token in the header
            }
        }).then(res => {
            console.log(res.data)
            if(res.data.success === true){
                  let userInfo = sessionStorage.getItem('user');
                  userInfo  = JSON.parse(userInfo);
                  userInfo.balance = userInfo.balance + parseInt(amount);
                  sessionStorage.setItem('user',JSON.stringify(userInfo));
                  toast.success('Deposit Successful');
                  navigate('/deposit')
            }
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
            <h2 className="mb-4">Deposit Amount</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Amount</label>
                    <input type="text"
                           className="form-control"
                           id="email"
                           placeholder="Enter your Amount"
                           onChange={e => setAmount(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
        </div>
        </div>
    </>
    );
};

export default Create;