import React from 'react';
import ReactMapGL from 'react-map-gl';
import './comp.css';
import MapList from './MapList';
require('dotenv').config();

class ViewMap extends React.Component{

    
   
    state = {
        viewport: {
            width: '50%',
            height: '75%',
            latitude: 41.8850,
            longitude: -87.6198,
            zoom: 10
        }
    };


    constructor(props){
        super(props);
        this.props = props;
    }

   

    render(){
        const key = process.env.REACT_APP_MAPBOXAPIKEY;
        console.log("key"+ key);
        const style  = {
            position: 'absolute',
            textAlign: 'left',
            top: '20%',
            left: '25%',
            bottom: 0,
            width: '20%',
            opacity: 0.9
          };

      
        return(          
            <div>
                <h1 style = {{color: 'white', opacity: 0.9}} >Visualize</h1>
                <ReactMapGL  {...this.state.viewport} onViewportChange={(viewport) => this.setState({viewport})}
                    mapboxApiAccessToken = {key}
                     mapStyle = 'mapbox://styles/mapbox/dark-v9'
                    style = { style }></ReactMapGL>
                     <button className = 'popUpBtn'>Action</button>                            
            </div>
            );
    }
}


export default ViewMap;