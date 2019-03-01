import React from 'react';
import Popup from 'reactjs-popup';
import ReactMapGL from 'react-map-gl';
import './comp.css';


class MapList extends React.Component{

    constructor(props){
        super(props);
        this.props.markers = props.markers;
        this.state.show = false;
    }  

    show(){
        this.setState({show : true});
    }

    hide(){
        this.setState({show : false});
    }

    render(){
        return(
            <div>
                <Popup trigger = {this.state.show} 
                modal
                closeOnDocumentClick>
                    <ul>{this.props.markers}</ul>
                </Popup> 
            </div>
        );
    }
}

export default MapList;