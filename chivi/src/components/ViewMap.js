import React from 'react';
import Map from './ViewMap';
import ReactMapGL from 'react-map-gl';


class ViewMap extends React.Component{
   
    state = {
        viewport: {
            width: 400,
            height: 400,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
        }
    };

    render(){

        const style  = {
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '200%'
          };
      
        return(
            <div >
                <ReactMapGL style = {style}  {...this.state.viewport} onViewportChange={(viewport) => this.setState({viewport})}
             mapboxApiAccessToken = 'pk.eyJ1IjoiZWRodWJiYXJkMTk5NCIsImEiOiJjamJmb3p2ZHQyeGNyMzJwZWFqeWd4ZDN6In0.yWQQD8j1AotGQkAeoQm7FA'
             mapStyle = 'mapbox://styles/mapbox/streets-v11' />
            </div>
            
        );
    }
}


export default ViewMap;