import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ikako",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecucleA gerDerivedStateFromProps");
    return null;
  }

  componentDidMount(){
    console.log("LifecycleA componentDidMount")
  }

  shouldComponentUpdate(){
    console.log('LifecycleA shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate(){
    console.log('LifecucleA comonentDidUpdate')
  }

  changeState =()=>{
    this.setState({
        name:'Codevolution'
    })
  }

  render(){
    console.log("LifecycleA render")
    return(
    <div>
        <div>Lifecucle A</div>
        <button onClick={this.changeState}>Cgange state</button>
        <LifecycleB/> 
    </div>
    )
}
}


export default LifecycleA;
