
import  React  from 'react';
import './comp.css';


class ViewPost extends React.Component{
    constructor(props){
        super(props)
        this.newComment = {author:'',body:''};
    }

    handleText = (event)=>{
        this.newComment.body = event.target.value;
    }
    handleName = (event)=>{
        this.newComment.author = event.target.value;
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
                    <form>
                    <input placeholder = "Who Are You?"></input>               
                    <textarea placeholder = "Commnent on this post" onChange = {this.handleText}></textarea>
                    <button onClick = {()=>{
                        this.state.comments.push(this.newComment);
                        console.log(this.state.comments);
                    }}>Post</button>
                    </form>
            </div>
        );
    }
}


export default ViewPost;