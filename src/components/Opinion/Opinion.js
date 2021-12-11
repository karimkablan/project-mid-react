import axios from "axios";
import React, { useState } from "react";
import './Opinion.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactStars from "react-rating-stars-component";
const Opinion = () => {
    const [names, setNames] = useState('')
    const [textOpinion, setTextOpinion] = useState('')
    const [numberOrder, setNuberOrder] = useState('')
    const [rating, setRating] = useState(5)
    const [dataOpinion, setdataOpinion] = useState([])

    const [count, setCount] = useState(0);


    React.useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        await axios.get(`http://localhost:5000/user/Opinion`).then((res) => {
            setdataOpinion(res.data);
        });
    };



    const month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

    const addNewOpinion = async () => {
        console.log(numberOrder);
        console.log(rating);
        const d = new Date();
        const timeDate = `At - ${d.getDate()} / ${month[d.getMonth()]} / ${d.getFullYear()}`;
        const time = `At - ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} `
        if (names.trim().length !== 0 && textOpinion.trim().length !== 0 && rating > 0) {
            let data = {
                name: names,
                textOpinion: textOpinion,
                createdAt: timeDate,
                createdAt2: time,
                numberOrder: +numberOrder,
                rating:rating
            }
            try{
                const res = await axios.post('http://localhost:5000/user/Opinion', data)
                console.log("post :", res)
                setNames('');
                setTextOpinion('');
                setNuberOrder('');
                setRating(5)
                getData();
                toast("Thank you for feedback")
            }catch(e){
                toast("Invalid order number")
            }

        }
        else {
            toast("You entered incorrect information please update")
        }

    }




    return (
        <div>
            <div className="girdwork1">
                {dataOpinion.map((element) => {
                    return <div key={element._id} className="div-Opinion1">
                        <div className="container1">
                            <main className="grid1">
                                <article>
                                    <div className="text1">
                                        <h3>{element.name}</h3>
                                        <p>{element.textOpinion}</p>
                                        <ReactStars activeColor="#a36c22" size={28} value={element.rating}   edit={false}/>
                                        <p>{element.createdAt}</p>
                                    </div>
                                </article>
                            </main>
                        </div>
                    </div>
                })}
            </div>
            <div className="div-Opinion2">
                <div className="container1">
                    <main className="grid1">
                        <article>
                            <div className="text1">
                                <h3><i className="far fa-comment"></i> Write Opinion</h3>
                                <input type="text1" value={names} placeholder="Enter Name" maxLength="22" onChange={(e) => { setNames(e.target.value) }} /><br /><br />
                                <input type="number" value={numberOrder} placeholder="Enter Order Number"  onChange={(e) => { setNuberOrder(e.target.value) }} /><br /><br />
                               <div> <textarea type="text" rows={7} cols={32} placeholder="Write a Opinion" maxLength="200" value={textOpinion} onChange={e => setCount(e.target.value.length , setTextOpinion(e.target.value))} /><p>200/{count}</p> </div>
                                <ReactStars activeColor="#6f2205" size={28} isHalf={true} onChange={(rating) => {setRating(rating)}} value={rating}/><p style={{color:"#6f2205"}}>{rating} Stars</p>
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