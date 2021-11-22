import React from "react";
import { useDispatch } from "react-redux";
import { terminerTodo, updateTodo } from "../redux/action";
import { useState } from "react";

function Add({ el }) {
  const dispatch = useDispatch();
  // const Done = () => {
  //   dispatch(terminerTodo(el.id));
  // };
  const [name, setName] = useState(el.name);
  const [editable, setEditable] = useState(false);

  return (
    <div>
      <h3 style={el.isDone ? { textDecoration: "line-through" } : {}}>
        {el.name}
      </h3>
      <button
        onClick={() => {
          dispatch(terminerTodo(el.id));
        }}
      >
        Done
      </button>
      {editable ? (
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      ) : (
        ""
      )}
      <button
        onClick={() => {
          dispatch(updateTodo({ ...el, name: name }));
          if (editable) {
            setName(el.name);
          }
          setEditable(!editable);
        }}
      >
        {editable ? "Update" : "Edit"}
      </button>
    </div>
  );
}

export default Add;
