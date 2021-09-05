import React from "react";
import { connect } from "react-redux";
import "../../App.css";
import { submitTodo } from "../../redux/action";
import history from "../../routes/routehistory";


class CreateTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      currentTodo: {
        title: "",
        createdBy: "",
        description: "",
      },
      editIndex: "",
    };

  }

  submitTodo = (e) => {
    e.preventDefault();
    this.props.submitTodo(this.state.currentTodo);
    history.push({ pathname: "/" })
  }

  handleInput(e, element) {
    const { currentTodo } = this.state;
    currentTodo[element] = e.target.value;
    this.setState({ currentTodo });
  }

  render() {
    return (
      <>
        <div className="createTodo">
          <div className="d-flex justify-content-center align-items-center">
            <div className="todoListBox">
              <form id="todo-form">
                <div className="d-flex justify-content-center align-items-center">
                  <label className="inputPadding">Title</label>
                  <input
                    type="textl"
                    className="form-control textfield"
                    name="title"
                    value={this.state.currentTodo.title}
                    onChange={(e) => this.handleInput(e, "title")}
                  />
                </div>
                <br />
                <div className="d-flex justify-content-center align-items-center">
                  <label className="inputPadding">Created By</label>
                  <input
                    type="textl"
                    className="form-control textfield"
                    name="createdBy"
                    value={this.state.currentTodo.createdBy}
                    onChange={(e) => this.handleInput(e, "createdBy")}
                  />
                </div>
                <br />
                <div className="d-flex justify-content-center align-items-center">
                  <label className="inputPadding">Description</label>
                  <textarea
                    className="form-control textfield"
                    rows="4"
                    name="description"
                    value={this.state.currentTodo.description}
                    onChange={(e) => this.handleInput(e, "description")}
                  ></textarea>
                </div>
                <br />
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn" onClick={(e) => {
                    e.preventDefault();
                    history.push({ pathname: "/" });
                  }
                  }>
                    <i className="fa fa-times"></i> Cancel
                  </button>
                  <button className="btn" onClick={(e) => this.submitTodo(e)}>
                    <i className="fa fa-floppy-o"></i> Save
                  </button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitTodo: (todoAdd) => { dispatch(submitTodo(todoAdd)) }
  }
}
export default connect(null, mapDispatchToProps)(CreateTodo);
