import React from 'react'
import {Component} from 'react'

function ChildComponent(props){

  return(<div> 
<button onClick={props.greeterHandler}> Click </button>

  </div>)
}
export default ChildComponent
