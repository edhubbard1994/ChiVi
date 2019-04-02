import React from 'react';
import ReactMapGL from 'react-map-gl';
import './comp.css';

//TODO: edit make this fit the current paradigm
class MapListItem extends React.Component{
    constructor(props){
        super(props);

        this.state = props.data;
origin/master
        
    }

    render(){
        return( 
            <div className = 'ListItem'>
            <h2>{this.state.name}</h2>
            <p>{this.state.description}</p>

            </div>
        );

    }
}

export default MapListItem;