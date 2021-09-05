import React, { useEffect, useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import '../../App.css';
function HomeScreen() {
  const [todo, setTodo] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (history.location.state && history.location.state.value) {
      const value = history.location.state.value;
      setTodo(value);
    }
  }, []);

  const removeTodo = (title) => {
    const newList = todo.filter((item) => item.title !== title);
    setTodo(newList);
  }
  return (
    <React.Fragment>
      <div>
        <Container>
          <Row style={{ paddingTop: 30 }}>
            <Col md={{ span: 4, offset: 3 }}>
              <div >
                <h1 className='appName'>Todo</h1>
              </div>
              <div className='todoListBox'>
                <div style={{ paddingTop: 20 }}>
                  {todo.length > 0 ? (
                    <div>
                      {todo.map((item, index) => (
                        <ListGroup key={index} style={{ marginBottom: 10 }}>
                          <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <Col>
                              <Row>  <h4>{item.title}</h4></Row>
                              <Row>  <h5>{item.createdBy}</h5></Row>
                            </Col>
                            <div>
                              <button className="btn" onClick={() => {
                                history.push({
                                  pathname: "/edittodo",

                                })
                              }}><i className="fa fa-edit"></i>
                              </button>
                              <button className="btn" onClick={() => removeTodo(item.title)}><i className="fa fa-trash"></i>
                              </button>
                            </div>
                          </ListGroup.Item>
                        </ListGroup>
                      ))}
                    </div>
                  ) : (
                    <h5>No Todo to show</h5>
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
                    state: { todoArray: todo },
                  })
                }
              >
                Create Todo
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default HomeScreen;
