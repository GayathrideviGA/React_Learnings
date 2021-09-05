import React from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import "../../App.css";
import history from "../../routes/routehistory";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }
  componentDidMount() {
    if (history.location.state && history.location.state.value) {
      const value = history.location.state.value;
      this.setState({
        todos: value,
      });
    }
  }
  removeTodo = (title) => {
    const newList = this.state.todos.filter((item) => item.title !== title);
    this.setState({
      todos: newList,
    });
  };
  handleEdit = (index) => {
    history.push({
      pathname: "/createtodo",
      state: { todoIndex: index, todoArray: this.state.todos },
    });
  };
  render() {
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
                    {this.state.todos.length > 0 ? (
                      <div>
                        {this.state.todos.map((item, index) => (
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
                                  onClick={() => this.handleEdit(index)}
                                >
                                  <i className="fa fa-edit"></i>
                                </button>
                                <button
                                  className="btn"
                                  onClick={() => this.removeTodo(item.title)}
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
                  onClick={() =>
                    history.push({
                      pathname: "/createtodo",
                      state: { todoArray: this.state.todos },
                    })
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

export default HomeScreen;
