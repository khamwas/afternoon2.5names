import React, { Component } from 'react';
import './App.css';
import Includes from './Includes';
import Mentors from './Mentors';

class App extends Component {
 constructor(){
   super();
   this.state={
     input:'',
     mentors:['Shea','Erik','Jonathan','Steven','Spencer','Jarrid','Logan'],

   }
 }
changeHandler(e){
  this.setState({input:e.target.value});
 
}

// includesMentor(){
//   if (this.state.mentors.includes(this.state.input)){
//     this.setState({includes: 'true'})
//   }else{
//     this.setState({includes: 'false'})
//   }console.log(this.state.includes)
// }

 render(){
   return<div className='App'>
   <input 
   placeholder='Check your Mentor'
   onChange={(e)=>this.changeHandler(e)}>
   </input>
  <Mentors mentors={this.state.mentors}></Mentors>
  <Includes input={this.state.input} mentors={this.state.mentors}></Includes>
   </div>
 }
}

export default App;
