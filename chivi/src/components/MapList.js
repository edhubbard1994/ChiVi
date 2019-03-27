import React from 'react';
import Popup from 'reactjs-popup';
import ReactMapGL from 'react-map-gl';
import './comp.css';



class MapList extends React.Component{

    test = ["hello","this", "is", "a", "test"];

    constructor(props){
        super(props);
        this.getMarkers = this.getMarkers.bind(this);
    }  

    getMarkers(){
        this.setState({markers: this.test}); //TODO: change to this.props.markers
    }

    render(){

        return(
            <div className = 'Map List'>
                    <ul><li>{this.props.state}</li></ul>
            </div>
        );
    }
}

export default MapList;