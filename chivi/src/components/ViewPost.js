



class ViewPost extends React.Component{
    constructor(props){
        
    }


    render(){
        this.state = this.props.location.state;
        return(
            <div>
                <h1>{this.state.title}</h1>
                <h3>{this.state.post}</h3>
                {this.state.comments.map(comment =>
                    <div>
                        <h4>{comment.author}</h4>
                        <p>{comment.body}</p>
                    </div>)}
            </div>
        );
    }
}


export default ViewPost;