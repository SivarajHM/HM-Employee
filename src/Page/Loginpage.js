import React from 'react';
import Login from '../Components/Login';
import Display from '../Components/Display';

export default function Loginpage(){
    return(
        <div className="login-section-initial ">
            <div className="container">
                <section className="login-diplay">
                    <Display />
                    <Login />
                </section>
            </div>
        </div>
    );
}