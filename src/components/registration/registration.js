import React, { useState,useRef } from "react";
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import './registration.css';

const Registration = () => {

    const history = useHistory() ;
   
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [Email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [noAndYes, setnoAndYes] = useState(true)

    const refMessage = useRef()

    const logIn = async () => {
        // if(isEmail(`${Email}`) && userName.length > 1 && password.toString().length === 8){
          let data = {
              email: Email,
              password: password
          }
              const res = await axios.post('http://localhost:5000/user/signin', data)
              console.log("post :", res)
              refMessage.current.innerHTML = `${res.data.message}`
              if(res.data.message === "Signin successful"){
                localStorage.setItem('Data', JSON.stringify(res.data.data));
                console.log(res.data.data);
                history.push('/home/home')
              }
              
          }


          const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)


    const addNewUser = async () => {
        refMessage.current.innerHTML = ""
        const newDateOfBirth = getAge(dateOfBirth)
        console.log( newDateOfBirth);
     if(!(userName.length > 1 )){
        toast("Invalid Name")
      }
    else if(!isEmail(`${Email}`)){
        toast("Invalid Email")
      }
    else if(!(newDateOfBirth >= 18)){
        toast("You're Under 18")
      }
     else if(!(password.toString().length >= 8)){
        toast("Short Password Minimum 8 Characters")
      }else{

          let data = {
            name: userName,
            email: Email,
            password: password,
            dateOfBirth: dateOfBirth
         }
            const res = await axios.post('http://localhost:5000/user/signup', data)
            console.log("post :", res)
            refMessage.current.innerHTML = `${res.data.message}`
        
        }

    }



    const logOut = () => {
        setnoAndYes(!noAndYes)
    }

    return (
        <div>
            {noAndYes ?
                <div className="containerk">
                    <div className="formk">
                    <div className="input-fieldk">
                            <label>Email</label>
                            <input
                                className="input1"
                                type="email"
                                placeholder="Email"
                                id="email"
                                name="email"
                                onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="input-fieldk">
                            <label >Password</label>
                            <input
                                className="input1"
                                type="password"
                                placeholder="********"
                                id="password"
                                name="password"
                                onChange={(e) => { setPassword(e.target.value) }} />
                        </div>

                        <div className="actionk">
                            <button  onClick={logIn} className="btnk">Log in</button>
                            <button  onClick={logOut} className="btnk">Sign up</button>
                        </div>
                        <div className="actionk">
                        <div className="msg" ref={refMessage}></div>
                        </div>
                    </div>
                </div>
                :
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
                                onChange={(e) => { setUserName(e.target.value) }} />
                        </div>
                        <div className="input-fieldk">
                            <label>Email</label>
                            <input
                                className="input1"
                                type="email"
                                placeholder="Email"
                                id="email"
                                name="email"
                                onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="input-fieldk">
                            <label >Date Of Birth</label>
                            <input
                                className="input1"
                                type="date"
                                id="password"
                                name="dateOfBirth"
                                onChange={(e) => { setDateOfBirth(e.target.value) }} />
                        </div>
                        <div className="input-fieldk">
                            <label >Password</label>
                            <input
                                className="input1"
                                type="password"
                                placeholder="********"
                                id="password"
                                name="password"
                                onChange={(e) => { setPassword(e.target.value) }} />
                        </div>

                        <div className="actionk">
                            <button onClick={logOut} className="btnk">Log in</button>
                            <button  onClick={addNewUser} className="btnk">Send</button>
                        </div>
                        <div className="actionk">
                        <div className="msg" ref={refMessage}></div>
                        </div>

                    </div>
                </div>
                </>}
                <ToastContainer/>
        </div>
    )
}

export default Registration;

