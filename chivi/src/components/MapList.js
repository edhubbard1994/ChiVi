import React from 'react';
import ReactMapGL from 'react-map-gl';
import './comp.css';


class MapList extends React.Component{
    constructor(props){
        super(props);
        this.props.markers = props.markers;
    }
    render(){
        return(
            <div>
                <ul>{this.props.markers}</ul>
            </div>
        );
    }
}