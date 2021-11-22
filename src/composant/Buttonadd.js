import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHandler } from "../redux/action";

function Buttonadd() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const New = () => {
    dispatch(
      addHandler({
        id: Math.random,
        name: input,
      })
    );
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Please write here "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={New}>Click ici</button>
    </div>
  );
}

export default Buttonadd;
