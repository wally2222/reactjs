// V14
import React from 'react'
import {Component} from 'react'

class EventBind extends Component {
  constructor(props){
    super(props)
    this.state = {message: "Hello"}
    /* thirth bind inconstuctor*/
    /*this.eventHandler =this.eventHandler.bind(this)*/
  }
  eventHandler = ()=>{
    /* is not function */
    this.setState({
      message: "GoodBye"
    })
  }

  render() {
    return(<div> 
{this.state.message}

{/*first method <button onClick={this.eventHandler.bind(this)}>
    Click </button> */}
 {/* second method  <button onClick= {() =>this.eventHandler()}> 
 Click </button>} */}
 <button onClick= {this.eventHandler}> Click </button>

    </div>)
  }
}

export default EventBind
           
          // App.js
           
 import "./styles.css";
import EventBind from './EventBind'

export default function App() {
  return (
    <div className="App">
      <h3> Code</h3>
      <EventBind/>
     
    </div>
  );
}
    index.js
    
    import "./styles.css";
import EventBind from './EventBind'

export default function App() {
  return (
    <div className="App">
      <h3> Code</h3>
      <EventBind/>
     
    </div>
  );
}


