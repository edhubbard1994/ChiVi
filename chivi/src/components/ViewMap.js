import React from 'react';
import MapGL, {Marker} from 'react-map-gl';
import './comp.css';
import MapList from './MapList';
import Pin from './Pin';
require('dotenv').config();
const request = require('request');

var count = 0;
class ViewMap extends React.Component{


    constructor(props){
        super(props);
        this.props = props;
        this.state= {
            loaded:false,
            points: [],
            selected: {name: "one", description: "this is a description"},
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

    loadPoints = () => {
        console.log("loading points...")
        request.get('http://localhost:5000/api',(err, res, body)=>{
            let parsed = JSON.parse(body);
            this.setState({points: parsed});
            console.log('body:'+ parsed);
            this.setState({loaded: true});
        });
        
    }

    markerClick = () => {
        console.log("clicked on MARKER");
    }

    renderMarkers = (point)=>{
        return(
            <Marker  key = {point._id} latitude={point.lat} longitude={point.lon} offsetLeft={-20} offsetTop={-10} >
                <div style = {{cursor: 'pointer'}} onClick ={()=>{console.log("clicked on MARKER")}}>
                <Pin></Pin>
            </div>
        </Marker>
        );
    }

    renderPopup = ()=>{
        const {popupInfo} = this.state;
    
        return popupInfo && (
          <Popup tipSize={5}
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={() => this.setState({popupInfo: null})} >
            <CityInfo info={popupInfo} />
          </Popup>
        );
      }
    

    render(){
        if(this.state.loaded === false)
            this.loadPoints();
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
                <MapGL  {...this.state.viewport} onViewportChange={(viewport) => this.setState({viewport: viewport})}
                    mapboxApiAccessToken = {key}
                     mapStyle = 'mapbox://styles/mapbox/dark-v9'
                    style = { style }>
                        {this.state.points.map( point =>
                           this.renderMarkers(point)
                        )}
                    </MapGL>
                     <button onClick = {this.btnClick} className = 'popUpBtn'>Report</button>   
                    
            </div>
            );
    }
}


export default ViewMap;