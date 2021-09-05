import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducer';
const todoStore = createStore(todoReducer, applyMiddleware(
  thunk
))

export default todoStore