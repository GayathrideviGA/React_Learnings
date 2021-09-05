import React, { Component } from 'react';

class ChildMounting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "React child component"
    }
    console.log('Constuctor of child');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('Derived state of child');
    return true
  }
  componentDidMount() {
    console.log('Component did mount of child');
  }
  render() {
    return (
      <div>
        ChildMounting
      </div>
    );
  }
}

export default ChildMounting;