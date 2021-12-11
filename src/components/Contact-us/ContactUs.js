import axios from "axios";
import React, { useState,useRef } from "react";
import './ContactUs.css';
import isEmail from 'validator/lib/isEmail';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messageText, setMessageText] = useState('');
  const [number, setNumber] = useState('')
 
  const refMessage = useRef()


  const sendEmail = async () => {
 if(!(name.length > 1 )){
    toast("Invalid Name")
  }
  else if(!(number.length === 10)){
    toast("Invalid Number")
  }
else if(!(isEmail(`${email}`))){
    toast("Invalid Email")
  }
  else if(!(messageText.length >= 5)){
    toast("Write your message...")
  }else{

      let data = {
        name: name,
        email: email,
        messageText:messageText,
        number:number
     }
        const res = await axios.post('http://localhost:5000/user/email', data)
        
        toast("Email sent.. We will contact you within 24 hours")
        refMessage.current.innerHTML = `${res.data}`
        setTimeout(function(){  refMessage.current.innerHTML = "" }, 5000);
        setName("")
        setEmail("")
        setMessageText("")
        setNumber("")
    }

}


    return (
        <div className="kkkk">
            <div className="blurt"></div>
            <div className="contact-">
         <ul className="ul">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f icon"></i>    </a>
            </li>
            <li>
              <a href="#"><i className="fab fa-whatsapp icon"></i></a>
            </li>
            <li>
              <a href="#"><i className="fab fa-linkedin-in icon"></i></a></li>
            <li>
              <a href="#"><i className="fab fa-google-plus-g icon"></i></a></li>
          </ul>
        </div>
<div className="contentt">
  <h1 className="titlet">GET IN TOUCH</h1>
  <div className="contact-infot">
    <ul>
      <li><div className="circlet"><i className="fas fa-home"></i></div> North Israel, Beit Jann Village</li>
      <li><div className="circlet"><i className="fas fa-phone"></i></div>+972 052 6674766</li>
      <li><div className="circlet"><i className="fas fa-envelope"></i></div> name@address.com</li>
      <li><div className="circlet"><i className="fas fa-clock"></i></div>Sun - Thu 8:30 AM to 4:00 PM</li>
    </ul>
    <div className="contact-sectiont">
      <input type="text" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
      <input type="number" placeholder="Phone Number" value={number}  onChange={(e) => { setNumber(e.target.value) }} />
      <input type="email" placeholder="E-mail" value={email} onChange={(e) => { setEmail(e.target.value) }} />
      <textarea placeholder="Write your message..." value={messageText}  onChange={(e) => { setMessageText(e.target.value) }}></textarea>
      <input type="submit" value="Send" onClick={sendEmail} />
        
    </div>
  </div>
  <div className="actionk">
  <div className="msg" ref={refMessage}></div>
  </div>
</div>
<ToastContainer/>
 </div>
    )
}

export default ContactUs;

