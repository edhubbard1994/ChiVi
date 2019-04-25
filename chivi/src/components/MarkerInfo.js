import React from 'react';
import ReactMapGL from 'react-map-gl';
import './comp.css';
import {Redirect} from "react-router-dom"

//TODO: edit make this fit the current paradigm
class MarkerInfo extends React.Component{
    constructor(props){
        super(props);
        console.log("PROPS:",props);
        this.props = props;
        this.state = {
            obj: this.props.info,
            redirect: false
        };
    }

    render(){
        if(this.state.redirect === true){
            return(
                <Redirect to ={{
                    pathname: '/view',
                    state: this.state.obj
                }}/>
            )
        }
        this.state ={obj: this.props.info};
        this.post = this.state.obj.post;     
        if(this.post.length > 47){
           this.post = this.post.substr(0,47).concat("...");
        }
        return( 
            <div onClick={()=> this.setState({redirect: true})}
            >
                <h3>{this.state.obj.title}</h3>
                <p>{this.post}</p>
            </div>
        );

    }
}

export default MarkerInfo;
/* ()=>{
                return(
                    <Redirect 
                        to = {{
                            pathname: '/view',
                            state: this.state
                        }}/>
                )*/