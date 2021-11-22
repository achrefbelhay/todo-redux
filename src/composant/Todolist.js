import React from "react";
import { useSelector } from "react-redux";
import Add from "./Add";
import { useState } from "react";

function Todolist() {
  const todos = useSelector((state) => state.todos);
  const [Completed, setCompleted] = useState(false);
  const [NotCompleted, setNotCompleted] = useState(false);

  return (
    <div>
      <div>
        <label>
          Completed
          <input
            type="checkbox"
            checked={Completed}
            onChange={() => setCompleted(!Completed)}
          />
        </label>
        <label>
          NotCompleted
          <input
            type="checkbox"
            checked={NotCompleted}
            onChange={() => {
              setNotCompleted(!NotCompleted);
            }}
          />
        </label>
      </div>
      {todos
        .filter((todo) => {
          if ((Completed && NotCompleted) || (!Completed && !NotCompleted)) {
            return true;
          } else if (Completed) {
            return todo.isDone;
          } else if (NotCompleted) {
            return !todo.isDone;
          }
        })
        .map((el, key) => (
          <Add el={el} key={el.id} />
        ))}
    </div>
  );
}

export default Todolist;
