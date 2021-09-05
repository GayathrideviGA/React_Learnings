import React from "react";
import { useHistory } from "react-router-dom";
import '../../App.css';

function EditTodo() {
  const [state, setState] = React.useState({
    title: "",
    createdBy: "",
    description: ""
  })

  const history = useHistory();
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }


  const handleSubmit = () => {
    if (state !== "") {
      let toDoArray;
      if (history.location.state && history.location.state.todoArray) {
        toDoArray = history.location.state.todoArray;
      }
      history.push({
        pathname: "/",
        state: { value: [...toDoArray, state] },
      });
      localStorage.setItem("taskList", JSON.stringify(state))
    } else {
      alert("Please Enter Some Value !");
    }
  };

  return (
    <>
      <div className='createTodo'>
        <div className="d-flex justify-content-center align-items-center">
          <div className='todoListBox'>
            <form>
              <div className="d-flex justify-content-center align-items-center">
                <label className="inputPadding">
                  Title
                </label>
                <input type="textl" className="form-control textfield" value={state.title} onChange={handleChange} name="title" />
              </div>
              <br />
              <div className="d-flex justify-content-center align-items-center">
                <label className="inputPadding">
                  Created By
                </label>
                <input type="textl" className="form-control textfield" value={state.createdBy} onChange={handleChange} name="createdBy" />
              </div>
              <br />
              <div className="d-flex justify-content-center align-items-center">
                <label className="inputPadding">
                  Description
                </label>
                <textarea className="form-control textfield" rows='4' value={state.description} onChange={handleChange} name="description"></textarea>
              </div>
              <br />
              <div className="d-flex justify-content-center align-items-center">
                <button className="btn" ><i className="fa fa-times"></i> Cancel</button>
                <button className="btn" onClick={() => handleSubmit()}><i className="fa fa-floppy-o"></i>  Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTodo;
