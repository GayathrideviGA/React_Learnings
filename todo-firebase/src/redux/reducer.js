const todos = (state = { todos: [] }, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          action.payload
        ].map((item, index) => ({ ...item, id: index }))
      };
    case "DELETE_TODO":
      return {
        // todos: state.todos.filter((item) => {
        //   return item.title !== action.payload;
        // }),
        ...state,
        todos: state.todos.filter((item, index) => item.title !== action.payload)
      };
    case "EDIT_TODO":
      return {
        todos: state.todos.map((item) => {
          if (item.id === action.id) {
            return {
              todos: [
                ...state.todos,
                action.payload
              ]
            };
          }
          return item;
        }),
      };
    case "GET_TODO":
      return action.todos
    default:
      return state
  }

}

export default todos;