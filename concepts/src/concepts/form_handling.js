import React, { Component } from 'react'

export class FormComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      feedback: "",
      topic: "",
    }

  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handleFeedbackChange = (event) => {
    this.setState({
      feedback: event.target.value
    })
  }
  handleSkillChange = (event) => {
    this.setState({
      topic: event.target.value
    })
  }
  handleSubmit = event => {
    alert(`${this.state.username} ${this.state.feedback} ${this.state.topic}`)
    event.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName</label>
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
        </div>
        <div>
          <label>Feedback</label>
          <textarea value={this.state.feedback} onChange={this.handleFeedbackChange} />
        </div>
        <div>
          <label>Choose Skill</label>
          <select value={this.state.topic} onChange={this.handleSkillChange}>
            <option value="react">React</option>
            <option value="flutter">Flutter</option>
            <option value="dart">Dart</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default FormComponent
