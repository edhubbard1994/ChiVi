import React from 'react';
import Popup from 'reactjs-popup';
import ReactMapGL from 'react-map-gl';
import './comp.css';
import MapListItem from './MapListItem';



class MapList extends React.Component{

   
    constructor(props){
        super(props);
        this.state = {
            items: this.props.items
        };
        console.log("props = "+ props);
        this.getMarkers = this.getMarkers.bind(this);
    }  

    getMarkers(){
        
    }

    render(){
        console.log("ListSTATE:", this.state);
        return(
            <div className = 'MapList'>
                    <ul>  {this.state.items.map(item =>
          <MapListItem data = {item} />
        )}</ul>
            </div>
        );
    }
}

export default MapList;