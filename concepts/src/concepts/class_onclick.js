import React, { Component } from 'react'

class ClassOnclick extends Component {
  onClickButton() {
    console.log('OnClicked button')
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickButton}>Click the button</button>
      </div>
    )
  }
}

export default ClassOnclick
