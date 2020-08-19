import React, {Component} from 'react'
import { Button } from 'reactstrap';
import './tabs.css'


export default class Tab extends Component{
    constructor(props){
        super(props)
        this.state = {
            books : '',
        };
    }
    

    render(){
        const {desc} = this.props;
        return(
           <div className='tab'>
                {desc}
           </div>
        )
               
    }
}