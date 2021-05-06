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
