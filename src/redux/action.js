import { ADD_TODO, COMPLET_TODO, UPDATE_TODO } from "./actionType";
export const addHandler = (todo) => {
  return { type: ADD_TODO, payload: todo };
};
export const terminerTodo = (todo) => {
  return { type: COMPLET_TODO, payload: todo };
};
export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
}
