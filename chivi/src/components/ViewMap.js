import React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import './comp.css';
import MapList from './MapList';
require('dotenv').config();


var count = 0;
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
        this.btnClick = this.btnClick.bind(this);
        
        //this.props.results =  null
    }
    
    btnClick() {
        count++;
        console.log(count);
        let st = (count % 2 === 1) ? 'test1' : 'test2';
        let sm = {listData: st};
        this.setState(sm);
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
                     mapStyle = 'mapbox://styles/mapbox/dark-v9'ß
                    style = { style }>
                         <Marker latitude={41.8850} longitude={-87.6198} offsetLeft={-20} offsetTop={-10}>Mark</Marker>
                    </ReactMapGL>
                     <button onClick = {this.btnClick} className = 'popUpBtn'>Display Data</button>   
                     <MapList state = {this.state.listData} />                      
            </div>
            );
    }
}


export default ViewMap;