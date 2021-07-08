import React from 'react';

export default class Display extends React.Component{
    constructor(){
        super();
        this.state={
            quotes:""
        }
    }
    render(){
        return(
            <div className="display-section">
                <div className="display-inner">
                    <h2 className="heading">Welcome</h2>
                    <p className="welcome-note">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit 
                       sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                </div>
            </div>
        );
    }
}