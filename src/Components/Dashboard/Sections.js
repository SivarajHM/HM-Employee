import React from 'react';

export default class Sections extends React.Component{
    constructor(){
        super();
        this.state={
            _sectionData:[]
        };
    }
    render(){
        return(
            <div>
                <section>
                    Dashboard Section
                </section>
            </div>
        );
    }
}