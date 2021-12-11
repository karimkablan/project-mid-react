import axios from "axios";
import React, { useState } from "react";
import './Manager.css';

const ManagerOpinion = () => {
    const [dataOpinion, setdataOpinion] = useState([])

    React.useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        await axios.get(`http://localhost:5000/user/Opinion`).then((res) => {
            setdataOpinion(res.data);
        });
    };


    const deleteHandler = async (id) => {
        const deleteRes = await axios.delete('http://localhost:5000/user/Opinion/'+ id)
        if (deleteRes.status === 200) {
            const stateList = [...dataOpinion];
            let resultOfNonDeleted = stateList.filter((user) => {
                return user.id !== id
            })
            setdataOpinion(resultOfNonDeleted)
            getData();
        }
    }

    return (
        <div>
               <h1>♛ Opinion Table ♛</h1>
            <div className="container">
                <table className="rwd-table">
                    <tbody>
                        <tr>
                            <th>Order Number</th>
                            <th>Name</th>
                            <th>Opinion</th>
                            <th>created At</th>
                            <th>Delete</th>
                        </tr>

                        {dataOpinion.map((e) => {
                            return (
                                <tr className="burdocolor" key={e._id}>
                                    <td>{e.numberOrder}</td>
                                    <td>{e.name}</td>
                                    <td>{e.textOpinion}</td>
                                    <td>{e.createdAt}--{e.createdAt2}</td>
                                    <td>
                                        {' '}
                                        <input
                                            type="button"
                                            onClick={() => {
                                                deleteHandler(e._id);
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
        </div>
    )
}

export default ManagerOpinion;