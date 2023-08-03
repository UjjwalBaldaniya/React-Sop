import React, { useState } from "react";
import ReactMemocom from "../Components/ReactMemocom";

const ReactMemo = () => {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <>
            <div className="main-div">
                <ReactMemocom todos={todos} />
                <p>Count: {count}</p>
                <button onClick={increment}>Increment +</button>
            </div>
        </>
    );
};

export default ReactMemo;
