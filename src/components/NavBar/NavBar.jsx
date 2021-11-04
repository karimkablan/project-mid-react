import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dining_Room from "../Dining_Room/Dining_Room"
import Rooms from "../rooms/rooms";
import YardAndViews from "../yardandviews/yardandviews";
import Home from "../home/home";
import WhatSaround from "../whats-around/whatsaround";
import Order from "../order/order"
import Opinion from "../Opinion/Opinion"
import Manager from "../Manager/Manager";
import './NavBar.css'
const RouterNav = () => {
  return (<>
    <Router>
      <nav id="navbar">
        <div className="container">
          <ul className="div-home">
            <li>
              <Link to="/home/home">Home</Link>
            </li>
            <li>
              <Link to="/rooms/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/Dining_Room/Dining_Room">Dining Room</Link>
            </li>
            <li>
              <Link to="/yardandviews/yardandviews">Yard And View</Link>
            </li>
            <li>
              <Link to="/whats-around/whatsaround">Whats Around</Link>
            </li>
            <li>
              <Link to="/Opinion/Opinion">Opinion</Link>
            </li>
            <li>
              <Link to="/order/order">Order</Link>
            </li>
            <li>
              <Link to="/Manager/Manager">Manager</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route path="/rooms/rooms">
          <Rooms />
        </Route>
        <Route path="/whats-around/whatsaround">
          <WhatSaround />
        </Route>
        <Route path="/Dining_Room/Dining_Room">
          <Dining_Room />
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
      </Switch>
    </Router>
  </>);
};

export default RouterNav;
