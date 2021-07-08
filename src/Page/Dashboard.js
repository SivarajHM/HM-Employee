import React from 'react';

import Aside from '../Components/Dashboard/Aside';
import Sections from '../Components/Dashboard/Sections';
import Rightside from '../Components/Dashboard/Rightside';
import Footer from '../Components/Dashboard/Footer';
import Headerdashboard from '../Components/Dashboard/Headerdashboard';

export default class Dashboard extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }   
    }
    render(){
        return(
            <div className="dashboard-wrapper">
                <div className="dashboard-in">
                    <section className="dashboard-section">
                        <Headerdashboard />
                        <Aside />
                        <div className="section-dashboard-wrapper" id="dashboard-section">  
                            <Sections />
                            <Rightside />
                            <Footer />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}