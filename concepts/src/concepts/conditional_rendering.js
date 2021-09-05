import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSignedUp: false
    }
  }

  render() {
    // Short Circuit Operator approach
    // return this.state.isSignedUp && <div>Welcome Signed UP User</div>

    // Ternary Conditional Operator
    return (
      this.state.isSignedUp ? <div>Welcome SignedUp User</div> : <div>Welcome New User</div>
    )

    // Element Variables
    // let message
    // if (this.state.isSignedUp) {
    //   message = <div>Welcome SIgned Up User</div>
    // }
    // else {
    //   message = <div>Welcome New User</div>
    // }
    // return message

    // if/else Method
    // if (this.state.isSignedUp) {
    //   return (
    //     <div>Welcome Signed Up User</div>
    //   )
    // }
    // else {
    //   return (<div>Welcome New User</div>)
    // }
    // return (
    //   <div>
    //     <div>Welcome Signed up User</div>
    //     <div>Welcome New User</div>
    //   </div>
    // )
  }
}

export default UserGreeting
