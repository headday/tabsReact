import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Tabs from '../tabs'
import TabContent from '../tabContent'
import './App.css';

export default class App extends Component {
    
  render(){return (
    <div className="App">
           <div className='form'>
            <Container>
                    <div className='nav'>
                        <Tabs onClick='true' desc='To read'/>
                        <Tabs onClick='true' desc='In progress'/>
                        <Tabs onClick='true' desc='Done'/>
                    </div>
                    <TabContent/>
                    <TabContent/>
                    <TabContent/>
                </Container>
           </div>
     </div>
  );}
}


