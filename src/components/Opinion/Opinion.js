import axios from "axios";
import React, { useState } from "react";
import './Opinion.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Opinion = () => {
    const [names, setNames] = useState('')
    const [textOpinion, setTextOpinion] = useState('')
    const [dataOpinion, setdataOpinion] = useState([])


    React.useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        await axios.get(`https://617fe2b9055276001774fd71.mockapi.io/Opinion`).then((res) => {
            setdataOpinion(res.data);
        });
    };



    const nameHandler = (e) => {
        setNames(e.target.value);
    }

    const textOpinionHandler = (e) => {
        setTextOpinion(e.target.value);
    }

    const addNewOpinion = async () => {
        const d = new Date();
        const timeDate = `Date ${d.getDay()} / ${d.getMonth() + 1} / ${d.getFullYear()}`;
        const time = `At ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} `
        if (names.trim().length !== 0 && textOpinion.trim().length !== 0) {
            let data = {
                name: names,
                Opinion: textOpinion,
                createdAt: timeDate,
                createdAt2: time
            }
            const res = await axios.post('https://617fe2b9055276001774fd71.mockapi.io/Opinion', data)
            console.log("post :", res)
            setNames('');
            setTextOpinion('');
            getData();
        }
        else {
            toast("You entered incorrect information please update")
        }

    }

    return (
        <div>
            <div className="girdwork1">
                {dataOpinion.map((element) => {
                    return <div key={element.id} className="div-Opinion1">
                        <div className="container1">
                            <main className="grid1">
                                <article>
                                    <div className="text1">
                                        <h3>{element.name}</h3>
                                        <p>{element.Opinion}</p>
                                        <p>{element.createdAt}</p>
                                    </div>
                                </article>
                            </main>
                        </div>
                    </div>
                })}
            </div>
            <div className="div-Opinion1">
                <div className="container1">
                    <main className="grid1">
                        <article>
                            <div className="text1">
                                <h3>Write Opinion</h3>
                                <input type="text1" value={names} placeholder="Enter Name" onChange={nameHandler} /><br /><br />
                                <textarea value={textOpinion} rows="5" cols="35" placeholder="Enter Opinion" onChange={textOpinionHandler} />
                                <input type="button" className="btnAdd1" value="ADD" onClick={addNewOpinion} />
                            </div>
                        </article>
                    </main>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Opinion;