import React from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { connect } from "react-redux";
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';
import "../../App.css";
import { removeTodo } from '../../redux/action';
import history from "../../routes/routehistory";
class HomeScreen extends React.Component {
  // showTodo = () => {
  //   this.props.getTodoFromFirestore()
  // }
  render() {
    console.log(this.props.todoItem, 'MY HOMEPAGE');
    return (
      <>
        <div>
          <Container>
            <Row style={{ paddingTop: 30 }}>
              <Col md={{ span: 4, offset: 3 }}>
                <div>
                  <h1 className="appName">Todo</h1>
                </div>
                <div className="todoListBox">
                  <div style={{ paddingTop: 20 }}>
                    {this.props.todoItem.length > 0 ? (
                      <div>
                        {this.props.todoItem.map((item, index) => (
                          <ListGroup key={index} style={{ marginBottom: 10 }}>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                              <Col>
                                <Row>
                                  {" "}
                                  <h4>{item.title}</h4>
                                </Row>
                                <Row>
                                  {" "}
                                  <h5>{item.createdBy}</h5>
                                </Row>
                              </Col>
                              <div>
                                <button
                                  className="btn"
                                  onClick={() =>
                                    history.push({
                                      pathname: "/edittodo",
                                      state: { todoIndex: index, todoArray: this.props.todoItem },
                                    })
                                  }
                                >
                                  <i className="fa fa-edit"></i>
                                </button>
                                <button
                                  className="btn"
                                  onClick={() => this.props.removeTodo(item.title)}
                                >
                                  <i className="fa fa-trash"></i>
                                </button>
                              </div>
                            </ListGroup.Item>
                          </ListGroup>
                        ))}
                      </div>
                    ) : (
                      <h5 className="text-danger">No Todo to show</h5>
                    )}
                  </div>
                </div>
              </Col>
              <Col>
                <Button
                  variant="success"
                  onClick={() => {
                    history.push({ pathname: "/createtodo", state: { todoIndex: null, todoArray: null }, })
                  }
                  }
                >
                  Create Todo
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    todoItem: state.todos,

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (title) => dispatch(removeTodo(title)),
    // getTodoFromFirestore: () => dispatch(getTodoFromFirestore())
  };
};
export default
  // compose(
  connect(mapStateToProps, mapDispatchToProps)
    // , firestoreConnect(() => ['todos']))
    (HomeScreen);
