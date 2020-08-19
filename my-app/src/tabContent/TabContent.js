import React, { Component } from 'react'
import './tabContent.css'

export default class TabContent extends Component {
  constructor(props){
      super(props)
      this.state = {
          active:false
      }
  }
  render(){
      if(this.state.active){
        return(
            <div className='tab_content'>
                
                <h1>asdasdqwe</h1>
            </div>
        )
      }else{
          return ''
      }
      
  }
}
