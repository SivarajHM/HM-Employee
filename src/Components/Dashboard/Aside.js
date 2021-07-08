import React from 'react';

export default class Aside extends React.Component{
    constructor(){
        super();
        this.state={
            _navData:[]
        };
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
                                            <a href="Javascript:void(0);">
                                                <span className="dashboard-icon d-icon"></span>
                                                <span className="list-name">Dashboard</span>
                                            </a>
                                            <div className="sub-list-dropdown">
                                                <ul className="sublists">
                                                    <li><a href="Javascript:void(0);">Sublist-1</a></li>
                                                    <li><a href="Javascript:void(0);">Sublist-2</a></li>
                                                    <li><a href="Javascript:void(0);">Sublist-3</a></li>
                                                    <li><a href="Javascript:void(0);">Sublist-4</a></li>
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