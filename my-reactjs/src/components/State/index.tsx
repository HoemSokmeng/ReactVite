import React from "react";
import {useState} from "react";

const StateDemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handle = () => {
    setCount ( count + 1)
  }


  return (
    <div>
        <p>{count}</p>
        <button onClick={handle}>+</button>
    </div>
  );
}

export default StateDemo;