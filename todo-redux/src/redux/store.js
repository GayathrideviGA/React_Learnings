import { createStore } from 'redux';
import todoReducer from './reducer';
const todoStore = createStore(todoReducer)

export default todoStore