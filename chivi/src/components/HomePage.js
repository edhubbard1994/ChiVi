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
                </div>        
                </Animate>    
        );
    }

}

export default HomePage;