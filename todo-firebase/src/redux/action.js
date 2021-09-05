import firestoreDb from '../services/firestore';
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const GET_TODO = "GET_TODO";

function addTodo(todo) {
  console.log(todo, 'ACTION VALUE PASEDDDDD')
  return {
    type: ADD_TODO,
    payload: todo,
  }
}

export function deleteTodo(title) {
  return {
    type: DELETE_TODO,
    payload: title,
  }
}


export function editTodo(todo) {
  return {
    type: EDIT_TODO,
    payload: todo,
  }
}

export function getTodo(todo) {
  return {
    type: GET_TODO,
    todo,
  }
}

export function submitTodo(data) {
  return dispatch => {
    return firestoreDb.collection('todos').doc(data.title).set(data)
      .then(() => {
        dispatch(addTodo(data))
      })
  }
}
export function updateTodo(data) {
  return dispatch => {
    return firestoreDb.collection('todos').doc(data.title).update(data)
      .then(() => {
        dispatch(editTodo(data))
      })
  }
}
export function removeTodo(data) {
  return dispatch => {
    return firestoreDb.collection('todos').doc(data.title).delete()
      .then(() => {
        dispatch(deleteTodo(data))
      })
  }
}
export function getTodoFromFirestore() {
  return dispatch => {
    firestoreDb.collection("todos").get().then((data) => {
      console.log(data, 'FIRESTORE DATAAAAAA')
      dispatch(getTodo(data))
    })
  }
}