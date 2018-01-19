import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const students = [
  {id: 12,name: 'Johny Walker' , score: 23},
  {id: 15,name: 'Jack Danial' , score: 26},
  {id: 17,name: 'Obiwan Kennobi' , score: 28},  
]

const Home = () => (<div>Home</div>)

const Students = () => (
  <div>
    
      students
    
    
  </div>
)



const StudentLine = (props) => (
  <div>{props.id} {props.name} = {props.score}</div>
)
class App extends Component {
  render() {
    return (
      <div>
        {
          <Router>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/students" component={Students}/> 
            </div>       
        </Router>
        }
      </div>
    );
  }
}

export default App;
