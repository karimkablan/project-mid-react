import axios from "axios";
import React, { useState } from "react";
import './order.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Order = () => {
    const [names, setNames] = useState('')
    const [email, setEmail] = useState('')
    const [checkIn, setcheckIn] = useState("2021-11-02")
    const [checkOut, setCheckOut] = useState("2021-11-02")
    const [number, setNumber] = useState('')
    const [requests, setRequests] = useState('No Requests')
    const [total, setTotal] = useState('')
    const [diffInDaysState, setdiffInDaysState] = useState('')
    const [state, setstate] = useState(true)

    const pricePreNight = 3000;

    const nameHandler = (e) => {
        setNames(e.target.value);
    }

    const numberHandler = (e) => {
        setNumber(e.target.value);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }
    const CheckInHandler = (e) => {
        setcheckIn(e.target.value);
    }
    const CheckOutHandler = (e) => {
        setCheckOut(e.target.value);
    }
    const requestsHandler = (e) => {
        setRequests(e.target.value);
    }

    const back = () => {
        setstate(!state)
    }




    const sendOrder = () => {
        setstate(!state)
    }




    const addNewOrder = async () => {
        const d = new Date();
        const time = `Date ${d.getDay()} / ${d.getMonth() + 1} / ${d.getFullYear()} At ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} `;
        if (names.trim().length !== 0 && number.trim().length === 10 && email.trim().length !== 0 ) {
            let data = {
                name: names,
                phoneNumber: number,
                check_in: checkIn,
                check_out: checkOut,
                Email: email,
                special_requests: requests,
                price: total,
                createdAt: time
            }
            const res = await axios.post('https://617fe2b9055276001774fd71.mockapi.io/customers', data)
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
        }
        else {
            toast("You entered incorrect information please update")
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

                <div>
                    <label> Phone Number: </label>
                    <input className="btnAdd2" type="number" name="phone" placeholder="Enter Phone Number" value={number} onChange={numberHandler} /><br /><br />

                    <label>  Name:  </label>
                    <input  className="btnAdd2" type='text' name="name" placeholder="Enter Name" value={names} onChange={nameHandler} /> <br /><br />

                    <label> Email:   </label>
                    <input className="btnAdd2" type='email' name="email" placeholder="Enter Email" value={email} onChange={emailHandler} /> <br /><br />

                    <label>   Check in: </label>
                    <input className="btnAdd2" type="date" name="Check_in" value={checkIn} onChange={CheckInHandler} /> <br /><br />

                    <label>  Check out:  </label>
                    <input className="btnAdd2" type="date" name="Check_out" value={checkOut} onChange={CheckOutHandler} /> <br /><br />

                    <label>     Special requests:  </label>
                    <select className="btnAdd2" name="requests" onChange={requestsHandler} value={requests} >
                        <option value="No_Requests">No Requests</option>
                        <option value="Baby_bed">Baby bed</option>
                        <option value="Late_arrival">Late arrival</option>
                        <option value="vegetarian_meal">vegetarian meal</option>
                        <option value="birthday_party">birthday party</option>
                    </select> <br /><br />
                    <input className="btnAdd2" type="button" value="Price Calculate" onClick={CalculatePrice} /><br />
                    <input className="btnAdd22" type="text" id="country" name="country" value={pricePreNight + " X " + diffInDaysState + " = " + total} readOnly /><br /><br />
                    <input  className="btnAdd2" type="button" value="Send Order" onClick={sendOrder} />
                </div>

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

                    <input type="button" className="btnAdd2" value="Update details" onClick={back} /><br /><br />
                    <input type="button" className="btnAdd2" value="Confirm" onClick={addNewOrder} />

                </div>}
                <ToastContainer/>
        </div>
    )
}

export default Order;

