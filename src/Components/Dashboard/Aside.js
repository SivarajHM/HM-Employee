import React from 'react';

import { FaTachometerAlt,
    FaChevronDown,
    FaRegQuestionCircle,
    FaRegUser, FaRegSun, 
    FaRegImages, FaRegCreditCard 
} from 'react-icons/fa'



export default class Aside extends React.Component{
    constructor(){
        super();
        this.state={
            _navData:[]
        };
    }

    showDropdown(name,event){
        var _dropDown = document.getElementById(name);
        console.log(name)
        if(!_dropDown.classList.contains("drop-down-overley")){
            _dropDown.classList.toggle("drop-down-overley");
        }
        else{
            _dropDown.classList.toggle("drop-down-overley");
        }
    }

    render(){
        return(
            <div className="aside-wrapper" id="aside">
                <aside className="left-aside-section">
                    <div className="aside-container">
                        <section className="side-section">
                            <div className="lists-wrapper">
                                <div className="list-in">
                                    <ul className="main-list">
                                        <li>
                                            <a href="/">
                                                <span className="dashboard-icon"><FaTachometerAlt /></span>
                                                <span className="list-name">Dashboard</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/home">
                                                <span className="dashboard-icon"><FaRegQuestionCircle /></span>
                                                <span className="list-name">Employee Policy</span>
                                            </a>
                                            
                                        </li>
                                        <li>
                                            <a href="/home">
                                                <span className="dashboard-icon"><FaRegUser /></span>
                                                <span className="list-name">Employee</span>
                                            </a>
                                            <span className="drop-down-icons" onClick={this.showDropdown.bind(this,'employee')}>
                                                <FaChevronDown/>
                                            </span>
                                            <div className="sub-list-dropdown" id="employee">
                                                <ul className="sublists">
                                                    <li><a href="/list">Sublist-1</a></li>
                                                    <li><a href="/list">Sublist-2</a></li>
                                                    <li><a href="/list">Sublist-3</a></li>
                                                    <li><a href="/list">Sublist-4</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="/home">
                                                <span className="dashboard-icon">
                                                    <FaRegSun />
                                                </span>
                                                <span className="list-name">Setting</span>
                                            </a>
                                            <div className="sub-list-dropdown">
                                                <ul className="sublists">
                                                    <li><a href="/list">Sublist-1</a></li>
                                                    <li><a href="/list">Sublist-2</a></li>
                                                    <li><a href="/list">Sublist-3</a></li>
                                                    <li><a href="/list">Sublist-4</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="/home">
                                                <span className="dashboard-icon">
                                                    <FaRegImages />
                                                </span>
                                                <span className="list-name">Gallery</span>
                                            </a>
                                            <div className="sub-list-dropdown">
                                                <ul className="sublists">
                                                    <li><a href="/list">Sublist-1</a></li>
                                                    <li><a href="/list">Sublist-2</a></li>
                                                    <li><a href="/list">Sublist-3</a></li>
                                                    <li><a href="/list">Sublist-4</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="/home">
                                                <span className="dashboard-icon">
                                                    <FaRegCreditCard />
                                                </span>
                                                <span className="list-name">Pay</span>
                                            </a>
                                            <div className="sub-list-dropdown">
                                                <ul className="sublists">
                                                    <li><a href="/list">Sublist-1</a></li>
                                                    <li><a href="/list">Sublist-2</a></li>
                                                    <li><a href="/list">Sublist-3</a></li>
                                                    <li><a href="/list">Sublist-4</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </section>
                    </div>
                </aside>
            </div>
        );
    }
}