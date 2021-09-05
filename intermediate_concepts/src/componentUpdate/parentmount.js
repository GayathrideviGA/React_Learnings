import React, { Component } from 'react';
import ChildUpdateMounting from './childmount';
class ParentUpdateMounting extends Component {
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
  shouldComponentUpdate(props, state) {
    console.log('Should component update');
    return true
  }
  componentDidMount() {
    console.log('Component did mount of parent');
  }
  render() {
    return (
      <div>
        ParentUpdateMounting
        <ChildUpdateMounting />
      </div>
    );
  }
}

export default ParentUpdateMounting;