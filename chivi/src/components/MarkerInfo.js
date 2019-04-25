import React from 'react';
import ReactMapGL from 'react-map-gl';
import './comp.css';

//TODO: edit make this fit the current paradigm
class MarkerInfo extends React.Component{
    constructor(props){
        super(props);
        console.log("PROPS:",props);
        this.props = props;

    }

    render(){
        this.state = this.props.info;
        this.post = this.state.post;     
        if(this.post.length > 47){
           this.post = this.post.substr(0,47).concat("...");
        }
        return( 
            <div>
                <h3>{this.state.title}</h3>
                <p>{this.post}</p>
            </div>
        );

    }
}

export default MarkerInfo;