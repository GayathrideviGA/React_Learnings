import React, { Component } from 'react'
import ChildComponent from './child_component'

class ParentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      parent: 'Parent one'
    }
    this.greetDialogue = this.greetDialogue.bind(this)
  }
  greetDialogue(childname) {
    alert(`Hello ${this.state.parent} from ${childname}`)
  }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetDialogue} />
      </div>
    )
  }
}
export default ParentComponent