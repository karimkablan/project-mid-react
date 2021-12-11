import axios from "axios";
import React, { useState,useRef,useEffect } from "react";
import './order.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import isEmail from 'validator/lib/isEmail';


const Order = () => {


    const [names, setNames] = useState('')
    const [userId, setUserId] = useState('')
    const [userEmail, setuserEmail] = useState('')
    const [email, setEmail] = useState('')
    const [checkIn, setcheckIn] = useState("2021-12-09")
    const [checkOut, setCheckOut] = useState("2021-12-09")
    const [newTimeDate, setNewTimeDate] = useState("2021-12-09")
    const [number, setNumber] = useState('')
    const [requests, setRequests] = useState('No Requests')
    const [total, setTotal] = useState('')
    const [diffInDaysState, setdiffInDaysState] = useState('')
    const [state, setstate] = useState(true)

    useEffect(() => {
        if(localStorage.getItem("Data")){
           let data = localStorage.getItem("Data") 
            data = JSON.parse(data)
          let id = data[0]._id;
          let emailUser = data[0].email;
          setUserId(id)
          setuserEmail(emailUser)
        }else{
            setUserId("")
            setuserEmail("")
        }

    }, [])

    const refMessage = useRef()

    const pricePreNight = 3000;


    const back = () => {
        setstate(!state)
    }




    const sendOrder = () => {
        setstate(!state)
    }




    const addNewOrder = async () => {
        let newOrderNumber = Date.now()
        if(!(names.length > 1 )){
            toast("Invalid Name")
          }
          else if(!(number.toString().length === 10)){
            toast("Invalid Phone Number")
          }
        else if(!isEmail(`${email}`)){
            toast("Invalid Email")
          }
          else if(!(total > 0)){
            toast("No dates selected")
          }
          else{
            let data = {
                userEmail:userEmail,
                userId: userId,
                name: names,
                phoneNumber: number,
                check_in: checkIn,
                check_out: checkOut,
                Email: email,
                special_requests: requests,
                price: total,
                numberOrder: newOrderNumber
            }
            const res = await axios.post('http://localhost:5000/user/Order', data)
            console.log("post :", res)
            setNames('');
            setNumber('');
            setEmail('');
            setcheckIn('');
            setCheckOut('');
            setRequests('');
            setTotal('');
            setdiffInDaysState('');
            toast("Your order has been successfully received Our representative will get back to you to confirm the order")
            setstate(!state)
            toast("The invitation has been sent to your email")
        }

    }

    const CalculatePrice = () => {
        const startDate = checkIn;
        const endDate = checkOut;
        const diffInMs = new Date(endDate) - new Date(startDate)
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
        setdiffInDaysState(diffInDays)
        const total1 = diffInDays * pricePreNight;
        setTotal(total1);
    }



    return (
        <div className="order">
            <div className="order_div">
                <p>
                    Price per night 3000 reservation is for the whole complex 4 rooms
                </p>
            </div>
            {state
                ?
                <>
                <div className="containerk">
                <div className="formk">
                    <div className="input-fieldk">
                        <label >Name</label>
                        <input
                            className="input1"
                            type="text"
                            placeholder="Name"
                            id="name"
                            name="name"
                            value={names}
                            onChange={(e) => { setNames(e.target.value) }} />
                    </div>
                    <div className="input-fieldk">
                        <label >Phone Number</label>
                        <input
                            className="input1"
                            type="number"
                            placeholder="Phone Number"
                            id="number"
                            name="number"
                            value={number}
                            onChange={(e) => { setNumber(e.target.value) }} />
                    </div>
                    <div className="input-fieldk">
                        <label>Email</label>
                        <input
                            className="input1"
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="input-fieldk">
                        <label >Check in</label>
                        <input
                            className="input1"
                            type="date"
                            id="Check_in"
                            name="Check_in"
                            min={newTimeDate}
                            value={checkIn}
                            onChange={(e) => { setcheckIn(e.target.value) }} />
                    </div>
                    <div className="input-fieldk">
                        <label >Check out</label>
                        <input
                            className="input1"
                            type="date"
                            id="Check_out"
                            name="Check_out"
                            min={checkIn}
                            value={checkOut}
                            onChange={(e) => { setCheckOut(e.target.value) }} />
                    </div>
                    <div className="input-fieldk">
                        <label > Special requests</label>
                        <select className="btnAdd2" name="requests" onChange={(e) => { setRequests(e.target.value) }} value={requests} >
                        <option value="No_Requests">No Requests</option>
                        <option value="Baby_bed">Baby bed</option>
                        <option value="Late_arrival">Late arrival</option>
                        <option value="vegetarian_meal">vegetarian meal</option>
                        <option value="birthday_party">birthday party</option>  
                        </select>
                    </div>
                    <div className="input-fieldk">
                        <input className="btnAdd1" type="button" value="Price Calculate" onClick={CalculatePrice} />
                        <input className="btn" type="text" id="country" name="country" value={pricePreNight + " X " + diffInDaysState + " = " + total} readOnly />
                    </div>

                    <div className="actionk">
                        <button onClick={sendOrder} className="btnk">Send Order</button>
                    </div>
                </div>
            </div>
               </>

                :

                <div>
                    Your order details<br /><br />
                    Name : ➔ ➔ {names}<br /><br />
                    Phone Number : ➔ ➔ {number}<br /><br />
                    Check In : ➔ ➔ {checkIn}<br /><br />
                    Check Out : ➔ ➔ {checkOut} <br /><br />
                    Email  :  ➔ ➔ {email}<br /><br />
                    Special Requests : ➔ ➔  {requests}<br /><br />
                    Price : ➔ ➔ {total}<br /><br />

                    <input type="button" className="btnAdd1" value="Update details" onClick={back} /><br /><br />
                    <input type="button" className="btnAdd1" value="Confirm" onClick={addNewOrder} />

                    <div className="msg" ref={refMessage}></div>

                </div>}
                <ToastContainer/>
        </div>
    )
}

export default Order;

