import React from 'react';
import ReactMapGL from 'react-map-gl';
import './comp.css';


class MapListItem extends React.Component{
    constructor(props){
        super(props);
        if(this.props.pin)//pin will be the neccessary info from a map marker object
            this.props.pin = props.pin;
    }

    render(){
        return( 
            <div>
                <h2>{this.props.pin.name}</h2>
                <h3>{this.props.pin.head}</h3>
                <p>{this.props.pin.post}</p>
            </div>
        );

    }
}