import React from 'react';
import geolocation from 'react-geolocation';
import './comp.css';
const request = require('request');

class AddPoint extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            post: '',
            lat: null,
            lon: null
        }
        this.name = '';
        this.post = '';
    }

    callApi = ()=>{
        request.post({
            url:'http://localhost:5000/api/add', 
            json: true,
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }, 
            body: {
                title: this.state.name,
                post: this.state.post,
                category:'bad',
                lat: this.state.lat,
                lon: this.state.lon,
                comments: []
            }},
            (err,res,body)=>{
                if(err)
                    console.log(err);
                else{
                    this.props.callback({loaded: false})
                    console.log(body);  
                    }             
             });
    }
    
    getLocation = ()=>{
        let coords = {};
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                coords = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                };
                this.setState({lat: coords.lat, lon: coords.lon})
                this.callApi();
            });
        }
    }

    handleText = (event)=>{
        this.post = event.target.value;
    }
    handleName = (event)=>{
        this.name = event.target.value;
    }
    render(){
        return(
            <div className = 'popUpBtn'>
                <h3>Add Point</h3>
                <input placeholder = "Point Name" onChange = {this.handleName}></input>               
                    <textarea placeholder = "What's happening here?" onChange = {this.handleText}></textarea>
                    <button onClick = {()=>{
                      this.setState({name: this.name, post: this.post});
                      this.getLocation();
                    }}>Create</button>     
            </div>
        );
    }
}

export default AddPoint;