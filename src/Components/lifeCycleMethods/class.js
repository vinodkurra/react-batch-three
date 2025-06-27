import React, { Component } from "react";

class LifeCycleMethodsExample extends Component {
  constructor() {
    super();
    console.log("This is Constructor");
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("This is getDerivedStateFromProps method");

    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("This is shouldComponentUpdate");
    return true;
  }

  componentDidMount() {
    console.log("This is componentDidMount");
  }

  componentDidUpdate() {
    console.log("This is componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("This is componentWillUnmount");
  }

  render() {
    console.log("This is render");
    return <div>I am Life LifeCycleMethodsExample UI</div>;
  }
}

export default LifeCycleMethodsExample;
