import "./styles.css";
//import Employee from './Employee'
import Parent from './Parent'


export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see
         some magic happen!</h2>

         {/*<Employee />*/}
         <Parent name='Bob'/>
         
    </div>
  );
}

//





import React from 'react'
import {Component} from 'react'
import ChildComponent from './ChildComponent'

class Parent extends Component {
  constructor(props){
    super(props)
    this.state = {message: 'hello'}
    this.greetingParent = this.greetingParent.bind(this)
  }
greetingParent(){
  alert(`hello ${this.state.message}`)
}
  render() {
    return (<div>
    < ChildComponent greeterHandler= {this.greetingParent} />
      
       </div>)
  }

}

export default Parent
