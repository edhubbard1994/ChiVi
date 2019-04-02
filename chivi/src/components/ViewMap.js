import React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import './comp.css';
import MapList from './MapList';
require('dotenv').config();


var count = 0;
class ViewMap extends React.Component{


    constructor(props){
        super(props);
        this.props = props;
        this.listState = "test0";
        this.state= {
            items: [{name: "one", description: "this is a description"},{name: "two", description: "this is a description"},{name: "three", description: "this is a description"}],
            viewport: {
                width: '50%',
                height: '75%',
                latitude: 41.8850,
                longitude: -87.6198,
                zoom: 10
            }
        };
    }
    
    btnClick = () => {
        count++;
        console.log(count);
        let st = this.state.items;
        st.push(count);
        this.setState(st);      
    }


    render(){
        const key = process.env.REACT_APP_MAPBOXAPIKEY;
        const style  = {
            position: 'absolute',
            textAlign: 'left',
            top: '20%',
            left: '25%',
            bottom: 0,
            width: '20%',
            opacity: 0.9
          };


          console.log("THESTATE:", this.state.count);
        return(          
            <div>
                <h1 style = {{color: 'white', opacity: 0.9}} >Visualize</h1>
                <ReactMapGL  {...this.state.viewport} onViewportChange={(viewport) => this.setState({viewport: viewport})}
                    mapboxApiAccessToken = {key}
                     mapStyle = 'mapbox://styles/mapbox/dark-v9'ß
                    style = { style }>
                         <Marker latitude={41.8850} longitude={-87.6198} offsetLeft={-20} offsetTop={-10}>Mark</Marker>
                    </ReactMapGL>
                     <button onClick = {this.btnClick} className = 'popUpBtn'>Display Data</button>   
                     <MapList items = {this.state.items} />                      

            </div>
            );
    }
}


export default ViewMap;