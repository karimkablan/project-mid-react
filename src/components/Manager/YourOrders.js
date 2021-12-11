import axios from "axios";
import React, { useState } from "react";
import './Manager.css';

const YourOrders = () => {
    const [dataOpinion, setdataOpinion] = useState([])
    const [userId, setUserId] = useState('')

    React.useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        if(localStorage.getItem("Data")){
            let data = localStorage.getItem("Data") 
             data = JSON.parse(data)
            let id = data[0]._id;
        await axios.get('http://localhost:5000/user/Order/'+id).then((res) => {
            setdataOpinion(res.data);
            setUserId("")
        });
    }
    };




    return (
        <div>
            <h1>♛ Your Orders ♛</h1>
            <div className="container">
                <table className="rwd-table">
                    <tbody>
                        <tr>
                            <th>Order Number</th>
                          
                            <th>Name</th>
                            <th>Phone Number</th>
                         
                            <th>Email</th>
                            <th>Check In</th>
                            <th>Check Out</th>
                            <th>special Requests</th>
                            <th>Created At</th>
                            <th>Price</th>
                        </tr>

                        {dataOpinion.map((e) => {
                            return (
                                <tr className="burdocolor" key={e._id}>
                                    <td>{e.numberOrder}</td>
                                
                                    <td>{e.name}</td>
                                    <td>{e.phoneNumber}</td>
                                    
                                    <td>{e.Email}</td>
                                    <td>{e.check_in}</td>
                                    <td>{e.check_out}</td>
                                    <td>{e.special_requests}</td>
                                    <td>{e.createdAt}</td>
                                    <td>{e.price}</td>
                                    <td>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <br/>
            <br/>
        </div>
    )
}

export default YourOrders;