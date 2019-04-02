import React from 'react';
import { Animate, AnimateKeyframes, AnimateGroup } from 'react-simple-animate';
import './comp.css';

const props = {
    startStyle : { opacity: 0 },
    endStyle : { opacity: 0.7}
};

class HomePage extends React.Component{

    constructor(){
        super();    
    }
    

    render(){
        return(      
                <Animate className = 'homebox' play {...props}>
                <div >
                    <h1>Welcome to Chi Vi</h1>
                    <p>ChiVi is an interactive environmental learning platform to let chicagoans talk
                        about the things that are going on around them as the pertain to the environment.
                        The goal is to foster discussions about our local environment using data from already
                        compiled data sets and the ones that you can help create here.
                    </p>

                </div>        
                </Animate>    
        );
    }

}

export default HomePage;