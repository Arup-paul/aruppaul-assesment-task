import React, {useEffect, useState} from 'react';
import AuthUser from "../../Components/AuthUser";
import {json, Link} from "react-router-dom";
import {toast} from "react-toastify";

const Index = () => {
    const {http} = AuthUser();

    const [report,setReport] = useState()

    const token = sessionStorage.getItem('token');
    const  jwtToken  = JSON.parse(token);


    const getData = (e) => {
        http.get('/deposit',{
            headers: {
                Authorization: `Bearer ${jwtToken}` // Include the JWT token in the header
            }
        }).then(res => {
            setReport(res?.data?.data)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getData()
    }, []);






    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between mb-2">
                <h4>Deposit</h4>
                <Link to='/deposit/create' className="btn btn-primary">Add New</Link>

            </div>
            <table   className="table table-striped table-bordered"  >
                <thead>
                   <tr>
                       <th>Id</th>
                       <th>Date</th>
                       <th>Amount</th>
                   </tr>
                </thead>

                <tbody>
                {
                    report?.length > 0 ? report?.map((item,index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.date}</td>
                            <td>{item.amount}</td>
                        </tr>
                    )) : <tr>
                        <td colSpan={3}>No Data Found</td>
                    </tr>

                }

                </tbody>
            </table>
        </div>


    );
};

export default Index;