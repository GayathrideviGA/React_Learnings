import React from "react";
import "../../App.css";
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

    this.submitTodo = this.submitTodo.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  componentDidMount() {
    if (history.location.state && history.location.state.todoArray) {
      const value = history.location.state.todoArray;
      const index = history.location.state.todoIndex;
      this.setState({
        todos: value,
        editIndex: index,
      });

      if (value[index]) {
        this.setState({
          currentTodo: value[index],
        });
      }
    }
  }
  submitTodo(e) {
    e.preventDefault();
    const newItem = this.state.currentTodo;
    if (newItem.title !== "") {
      const todos = [...this.state.todos, newItem];
      this.setState({
        todos: todos,
        currentTodo: {
          title: "",
          createdBy: "",
          description: "",
        },
      });
      setTimeout(() => {
        history.push({ pathname: "/", state: { value: this.state.todos } });
      }, 100);
    }
  }

  updateSubmit(e) {
    e.preventDefault();
    const newData = this.state.todos;
    newData.map((item, index) => {
      if (index === this.state.editIndex) {
        item = this.state.currentTodo;
      }
    });
    this.setState({
      todos: newData,
    });

    setTimeout(() => {
      history.push({ pathname: "/", state: { value: newData } });
    }, 100);
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
                  <button className="btn">
                    <i className="fa fa-times"></i> Cancel
                  </button>
                  {console.log(this.state.editIndex, " this.state.editIndex")}
                  {this.state.editIndex >= 0 ? (
                    <button
                      className="btn"
                      onClick={(e) => this.updateSubmit(e)}
                    >
                      <i className="fa fa-floppy-o"></i> Update
                    </button>
                  ) : (
                    <button className="btn" onClick={(e) => this.submitTodo(e)}>
                      <i className="fa fa-floppy-o"></i> Save
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CreateTodo;
