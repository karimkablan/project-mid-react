import axios from "axios";
import React, { useState } from "react";
import './Manager.css';

const ManagerOrder = () => {
    const [dataOpinion, setdataOpinion] = useState([])

    React.useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        await axios.get(`http://localhost:5000/user/Order`).then((res) => {
            setdataOpinion(res.data);
        });
    };


    const deleteHandler = async (id) => {
        const deleteRes = await axios.delete('http://localhost:5000/user/Order/' + id)
        if (deleteRes.status === 200) {
            const stateList = [...dataOpinion];
            let resultOfNonDeleted = stateList.filter((user) => {
                return user.id !== id
            })
            setdataOpinion(resultOfNonDeleted)
        }
    }

    return (
        <div>
            <h1>♛ Orders Table ♛</h1>
            <div className="container">
                <table className="rwd-table">
                    <tbody>
                        <tr>
                            <th>Order Number</th>
                          
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email User</th>
                            <th>Email</th>
                            <th>Check In</th>
                            <th>Check Out</th>
                            <th>special Requests</th>
                            <th>Created At</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>

                        {dataOpinion.map((e) => {
                            return (
                                <tr className="burdocolor" key={e._id}>
                                    <td>{e.numberOrder}</td>
                                
                                    <td>{e.name}</td>
                                    <td>{e.phoneNumber}</td>
                                    <td>{e.userId.email}</td>
                                    <td>{e.Email}</td>
                                    <td>{e.check_in}</td>
                                    <td>{e.check_out}</td>
                                    <td>{e.special_requests}</td>
                                    <td>{e.createdAt}</td>
                                    <td>{e.price}</td>
                                    <td>
                                        {' '}
                                        <input
                                            className="button-three"
                                            type="button"
                                            onClick={() => {
                                                deleteHandler(e.id);
                                            }}
                                            value="Delete"
                                        />
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

export default ManagerOrder;