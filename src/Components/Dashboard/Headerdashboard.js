import React from 'react';
import { Link } from "react-router-dom";

import Logo from '../../assets/images/dashboard-logo.png';


export default class Headerdashboard extends React.Component{
    constructor(){
        super();
        this.state={
            _dashboardheaderData:[]
        };
    }

    slide(){
        var _aside = document.getElementById("aside");
        _aside.classList.toggle("toggle-aside");
        
        var _name = document.getElementsByClassName("list-name");
        for(let i=0; i < _name.length ; i++){
            _name[i].classList.toggle("hide");
        }
        var _drop = document.getElementsByClassName("drop-down-icons");
        for(let i=0; i < _drop.length ; i++){
            _drop[i].classList.toggle("hide-arrow");
        }
        var _dashboard = document.getElementById("dashboard-section");
        _dashboard.classList.toggle("dashboard-full");
    }

    render(){
        return(
            <div className="dashboard-header">
                <div className="top-nav">
                    <header>
                        <div className="header-fx">
                            <div className="logo-section">
                                <a href="/home">
                                    <img src={Logo} alt="Logo" />
                                </a>
                                <button className="menu-icon" onClick={this.slide.bind(this)}></button> 
                            </div>
                            <div className="nav-outlink">
                                <Link className="outlinks" to="/login">Login</Link>
                                <Link className="outlinks" to="/sign">Sign-In</Link>
                                <Link className="outlinks" to="/dashboard">Dashboard</Link>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}