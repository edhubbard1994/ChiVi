import React from 'react';
import Map from './ViewMap';
import ReactMapGL from 'react-map-gl';
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

    render(){
        const key = process.env.REACT_APP_MAPBOXAPIKEY;
        console.log("key"+ key);
        const style  = {
            position: 'absolute',
            textAlign: 'left',
            top: '10%',
            left: '25%',
            bottom: 0,
            width: '20%',
            opacity: 0.9
          };

      
        return(          
            <ReactMapGL {...this.state.viewport} onViewportChange={(viewport) => this.setState({viewport})}
            mapboxApiAccessToken = {key}
             mapStyle = 'mapbox://styles/mapbox/dark-v9'
             style = { style }  /> 
            );
    }
}


export default ViewMap;