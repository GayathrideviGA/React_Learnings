import React, { Component } from 'react';
import ChildMounting from './childmount';
class ParentMounting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "React parent component"
    }
    console.log('Constuctor of parent');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('Derived state of parent');
    return true
  }
  componentDidMount() {
    console.log('Component did mount of parent');
  }
  render() {
    return (
      <div>
        ParentMounting
        <ChildMounting />
      </div>
    );
  }
}

export default ParentMounting;