import React,{useState} from "react";
// import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DiningRoom from "../Dining_Room/Dining_Room"
import Rooms from "../rooms/rooms";
import YardAndViews from "../yardandviews/yardandviews";
import Home from "../home/home";
import WhatSaround from "../whats-around/whatsaround";
import Order from "../order/order"
import Opinion from "../Opinion/Opinion"
import Manager from "../Manager/Manager";
import Registration from "../registration/registration";
import ContactUs from "../Contact-us/ContactUs";
import Map from "../Map/Map";
import YourOrders from "../Manager/YourOrders";
import './NavBar.css'
const RouterNav = () => {

  const [noAndYes, setnoAndYes] = useState(true)
 

 
  setInterval(function(){ 
    const userData = JSON.parse( localStorage.getItem('Data') );
    if(userData === null){
      setnoAndYes(true)
    }else{
      setnoAndYes(false)
    }
  }, 2000);

  const logOut = () => {
   localStorage.clear();
    setnoAndYes(false)
}



  return (<>
    <Router>
      {noAndYes ? 
      <nav id="navbar">
      <div className="container">
        <ul className="div-home">
          <li>
            <Link to="/home/home"><i className="fas fa-home"> Algermak 2000</i></Link>
          </li>
          <li>
            <Link to="/rooms/rooms"><i className="fas fa-bed"> Rooms</i></Link>
          </li>
          <li>
            <Link to="/Dining_Room/Dining_Room"><i className="fas fa-utensils"> Dining Room</i></Link>
          </li>
          <li>
            <Link to="/yardandviews/yardandviews"><i className="fas fa-mountain"> Yard & View</i></Link>
          </li>
          <li>
            <Link to="/whats-around/whatsaround"><i className="fab fa-pagelines"> Whats Around</i></Link>
          </li>
          <li>
            <Link to="/Opinion/Opinion"><i className="far fa-comment"> Opinion</i></Link>
          </li>
          <li>
            <Link to="/Map/Map"><i className="fas fa-route"> get direction</i></Link>
          </li>
          <li>
            <Link to="/Contact-us/ContactUs"><i className="fas fa-phone-square-alt"> Contact Us</i></Link>
          </li>
          <li>
            <Link to="/registration/registration"><i className="fas fa-sign-in-alt"> login</i></Link>
          </li>
          <li>
            <Link to="/Manager/Manager"><i className="fas fa-exclamation-triangle"> Manager</i></Link>
          </li>
        </ul>
      </div>
    </nav>
      
      : <nav id="navbar">
      <div className="container">
        <ul className="div-home">
          <li>
            <Link to="/home/home"><i className="fas fa-home"> Algermak</i></Link>
          </li>
          <li>
            <Link to="/rooms/rooms"><i className="fas fa-bed"> Rooms</i></Link>
          </li>
          <li>
            <Link to="/Dining_Room/Dining_Room"><i className="fas fa-utensils"> Dining Room</i></Link>
          </li>
          <li>
            <Link to="/yardandviews/yardandviews"><i className="fas fa-mountain"> Yard & View</i></Link>
          </li>
          <li>
            <Link to="/whats-around/whatsaround"><i className="fab fa-pagelines"> Whats Around</i></Link>
          </li>
          <li>
            <Link to="/Opinion/Opinion"><i className="far fa-comment"> Opinion</i></Link>
          </li>
          <li>
            <Link to="/Manager/YourOrders"><i className="fas fa-crown"> Your Orders</i></Link>
          </li>
          <li>
            <Link to="/order/order"><i className="fas fa-crown"> Order</i></Link>
          </li>
          <li>
          <Link to="/Map/Map"><i className="fas fa-route"> get direction</i></Link>
          </li>
          <li>
          <Link to="/Contact-us/ContactUs"><i className="fas fa-phone-square-alt"> Contact Us</i></Link>
          </li>
          <li>
            <Link to="/home/home" onClick={logOut}><i className="fas fa-sign-out-alt"> logout</i></Link>
          </li>
        </ul>
      </div>
    </nav>}
      

      <Switch>
        <Route path="/rooms/rooms">
          <Rooms />
        </Route>
        <Route path="/Map/Map">
          <Map />
        </Route>
        <Route path="/Contact-us/ContactUs">
          <ContactUs />
        </Route>
        <Route path="/whats-around/whatsaround">
          <WhatSaround />
        </Route>
        <Route path="/Dining_Room/Dining_Room">
          <DiningRoom />
        </Route>
        <Route path="/yardandviews/yardandviews">
          <YardAndViews />
        </Route>
        <Route path="/home/home">
          <Home />
        </Route>
        <Route path="/order/order">
          <Order />
        </Route>
        <Route path="/Opinion/Opinion">
          <Opinion />
        </Route>
        <Route path="/Manager/Manager">
          <Manager />
        </Route>
        <Route path="/registration/registration">
          <Registration/>
        </Route>
        <Route path="/Manager/YourOrders">
          <YourOrders/>
        </Route>
      </Switch>
    </Router>
  </>);
};

export default RouterNav;
