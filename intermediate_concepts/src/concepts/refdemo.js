import React, { Component } from 'react'

export class ReferenceDemo extends Component {
  constructor(props) {
    super(props)

    this.inputRefs = React.createRef()
  }
  componentDidMount() {
    this.inputRefs.current.focus()
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRefs} />
      </div>
    )
  }
}

export default ReferenceDemo
