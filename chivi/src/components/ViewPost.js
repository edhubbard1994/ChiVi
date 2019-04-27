
import  React  from 'react';
import './comp.css';
import {Redirect} from "react-router-dom"
const request = require('request');


class ViewPost extends React.Component{
    constructor(props){
        super(props)
        this.newComment = {author:'',body:''};
        this.state = {
            point: this.props.location.state,
            redirect: false
        };
    }
    
    sendComment = ()=>{
        let data = this.state.point;
        console.log("SENT DATA: "+ this.state.point);
        request.post({
            url:'http://localhost:5000/api/comment', 
            json: true,
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }, 
            body: data},
            (err,res,body)=>{
                this.newComment = {author:'',body:''};
                this.setState({point: body});
             });
    }

    handleText = (event)=>{
        this.newComment.body = event.target.value;
    }
    handleName = (event)=>{
        this.newComment.author = event.target.value;
    }

    render(){
        if(this.state.redirect === true){
            return(<Redirect to ={{pathname: '/map'}} />);
        }  
        console.log(this.state);
        return(
            <div className = 'homebox'>
                <h1>{this.state.point.title}</h1>
                <h3>{this.state.point.post}</h3>
                {this.state.point.comments.map(comment =>
                    <div>
                        
                        <h4>{"Author: "+comment.author}</h4>
                        <p>{comment.body}</p>
                    </div>)} 
                    <input placeholder = "Who Are You?" onChange = {this.handleName}></input>               
                    <textarea placeholder = "Commnent on this post" onChange = {this.handleText}></textarea>
                    <button onClick = {()=>{
                        if((this.newComment.body.length > 0) && (this.newComment.author.length > 0)){
                            this.state.point.comments.push(this.newComment);
                            this.sendComment();
                        }
                        console.log(this.state.comments);
                    }}>Post</button>  
                    <button onClick = {()=>{
                        this.setState({redirect: true});
                    }}>Back</button>             
            </div>
        );
    }
}


export default ViewPost;