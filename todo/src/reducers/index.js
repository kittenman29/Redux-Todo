import { ADD_TODO } from "../actions";

const initialState = {
  title: "To Do List",
  todos: [
      { item: 'dust', id: 29389834533, done: false},
      { item: 'wash dishes', id: 29389834533, done: false},
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newItem = {
        item: action.payload,
        id: Date.now(),
        done: false
      };
      return {
        ...state,
        todos: [...state.todos, newItem]
      };
    default:
      return state;
  }
}

export default reducer;