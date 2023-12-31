import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./SignIn";
import SignUp from "./SignUp";

function Demo() {
    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/sign-in"}>
                            RemoteStack
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-in"}>
                                        Sign in
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-up"}>
                                        Sign up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="outer">
                    <div className="inner">
                        <Routes>
                            <Route exact path="/" element={<Login />} />
                            <Route path="/sign-in" element={<Login />} />
                            <Route path="/sign-up" element={<SignUp />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Demo;
