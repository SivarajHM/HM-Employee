import React from 'react';

export default class Rightside extends React.Component{
    constructor(){
        super();
        this.state={
            _rightsideData:[]
        };
    }

    render(){
        return(
            <div>
                <aside>
                    Right Side Navigation
                </aside>
            </div>
        );
    }
}