import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ikako",
    };
    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecucleB gerDerivedStateFromProps");
    return null;
  }

  componentDidMount(){
    console.log("LifecycleB componentDidMount")
  }

  shouldComponentUpdate(){
    console.log('LifecucleB shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifecucleB getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate(){
    console.log('LifecucleB comonentDidUpdate')
  }


  render() {
    console.log("LifecycleB render")
    return <div>Lifecucle B</div>
  }
}

export default LifecycleB;
