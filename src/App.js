import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash'

const students = [
  {id: 12,name: 'Johny Walker' , score: 23},
  {id: 15,name: 'Jack Danial' , score: 26},
  {id: 17,name: 'Obiwan Kennobi' , score: 28},  
]

const StudentLine = (props) => (
  <div>{props.id} {props.name} = {props.score}</div>
)
class App extends Component {
  render() {
    return (
      <div>
        {
          _.map(students,student=> (<StudentLine {...student} />))
        }
      </div>
    );
  }
}

export default App;
