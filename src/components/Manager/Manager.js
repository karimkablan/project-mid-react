import React, { useState } from "react";
import ManagerOpinion from './ManagerOpinion'
import ManagerOrder from './ManagerOrder'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Manager.css';

const Manager = () => {

    const user = "admin";
    const pas = "admin";
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [noAndYes, setnoAndYes] = useState(true)

    const Ok = () => {
        if (userName === user && password === pas) {
            setnoAndYes(!noAndYes)
        }
        else {
            toast("Incorrect Details")
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
                            <label >User Name</label>
                            <input
                                className="input1"
                                type="text"
                                placeholder="User Name"
                                id="name"
                                name="name"
                                onChange={(e) => { setUserName(e.target.value) }} />
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
                            <button id="btn" onClick={Ok} className="btnk">Log in</button>
                        </div>
                    </div>
                </div>
                :
                <>
                    <Router>
                        <nav id="navbar8">
                            <div className="container8">
                                <ul className="div-home8">
                                    <li>
                                        <Link to="/ManagerOrder"><i className="fas fa-crown"> Orders Table</i></Link>
                                    </li>
                                    <li>
                                        <Link to="/ManagerOpinion"><i className="fas fa-crown"> Opinion Table</i></Link>
                                    </li>
                                    <li>
                                        <Link to="/Manager/Manager" onClick={logOut}><i className="fas fa-sign-out-alt"> logout</i> </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <Switch>
                            <Route path="/ManagerOpinion">
                                <ManagerOpinion />
                            </Route>
                            <Route path="/ManagerOrder">
                                <ManagerOrder />
                            </Route>
                        </Switch>
                    </Router>
                </>}
                <ToastContainer/>
        </div>
    )
}

export default Manager;

