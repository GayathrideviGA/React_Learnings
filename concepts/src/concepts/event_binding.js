import React, { Component } from 'react'

class EventBinding extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello'
    }
    // this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler() {
    this.setState({
      message: 'This is Gayathri Devi'
    })
    console.log(this)

  }
  // clickHandler = () => {
  //   this.setState({
  //     message: 'This is Gayathri Devi'
  //   })
  // }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click Me</button>
      </div>
    )
  }
}

export default EventBinding
