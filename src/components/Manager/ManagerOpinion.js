import axios from "axios";
import React, { useState } from "react";
import './Manager.css';

const ManagerOpinion = () => {
    const [dataOpinion, setdataOpinion] = useState([])

    React.useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        await axios.get(`https://617fe2b9055276001774fd71.mockapi.io/Opinion`).then((res) => {
            setdataOpinion(res.data);
        });
    };


    const deleteHandler = async (id) => {
        const deleteRes = await axios.delete('https://617fe2b9055276001774fd71.mockapi.io/Opinion/'+ id)
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
               <h1>♛ Opinion Table ♛</h1>
            <div className="container">
                <table className="rwd-table">
                    <tbody>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Opinion</th>
                            <th>created At</th>
                            <th>Delete</th>
                        </tr>

                        {dataOpinion.map((e) => {
                            return (
                                <tr key={e.id}>
                                    <td className="burdocolor">{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.Opinion}</td>
                                    <td>{e.createdAt}--{e.createdAt2}</td>
                                    <td>
                                        {' '}
                                        <input
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
        </div>
    )
}

export default ManagerOpinion;