
import  React  from 'react';
import './comp.css';


class ViewPost extends React.Component{
    constructor(props){
        super(props)
        this.newComment = '';
    }

    handleText = (event)=>{
        this.newComment = event.target.value;
    }

    render(){
        this.state = this.props.location.state;
        return(
            <div className = 'homebox'>
                <h1>{this.state.title}</h1>
                <h3>{this.state.post}</h3>
                {this.state.comments.map(comment =>
                    <div>
                        <h4>{comment.author}</h4>
                        <p>{comment.body}</p>
                    </div>)}                 
                    <textarea placeholder = "Commnent on this post" onChange = {this.handleText}></textarea>
                    <button onClick = {()=>{
                        this.state.comments.push(this.newComment);
                        console.log(this.state.comments);
                    }}>Post</button>
            </div>
        );
    }
}


export default ViewPost;