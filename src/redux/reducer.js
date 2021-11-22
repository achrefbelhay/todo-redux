import { ADD_TODO, COMPLET_TODO, UPDATE_TODO } from "./actionType";
import { todos } from "./data";
export const todoReducer = (state = { todos }, action) => {
  var newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state.todos];
      newTodos.push(action.payload);
      return {
        ...state,
        todos: newTodos,
      };
    case COMPLET_TODO:
      let id = action.payload;
      newTodos = state.todos.map((todo) =>
        id === todo.id ? { ...todo, isDone: !todo.isDone } : todo
      );
      return {
        ...state,
        todos: newTodos,
      };
    case UPDATE_TODO:
      newTodos = [...state.todos];
      let index = -1;
      for (let i = 0; i < newTodos.length; i++) {
        index++;
        if (newTodos[i].id == action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newTodos[index] = action.payload;
        return {
          ...state,
          todos: newTodos,
        };
      }
    default:
      return state;
  }
};
