
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
        http.post('/withdraw',{
            amount: amount,
        },{
            headers: {
                Authorization: `Bearer ${jwtToken}` // Include the JWT token in the header
            }
        }).then(res => {
            if(res.data.success === true){
                  let userInfo = sessionStorage.getItem('user');
                  userInfo  = JSON.parse(userInfo);
                  userInfo.balance = userInfo.balance - parseInt(amount);
                  sessionStorage.setItem('user',JSON.stringify(userInfo));
                  toast.success('Withdraw Successful');
                  navigate('/withdraw')
            }

        }).catch(err => {

            const response = err.response;
            if (response && response.status === 422) {
                if (response.data?.errors) {
                    const errors = response.data.errors;
                    for (const key in errors) {
                        toast.error(errors[key][0]);
                    }
                }
            }

            if(response && response.status === 402){
                toast.error(response.data.message);
            }
            if(response && response.status === 500){
                toast.error(response.data.message);
            }
        })
    }
    return (
    <>
        <div className="main-body ">
        <div className="login-container">
            <h2 className="mb-4">Withdraw Amount</h2>
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

                <button type="submit" className="btn btn-primary w-100">Add</button>
            </form>
        </div>
        </div>
    </>
    );
};

export default Create;