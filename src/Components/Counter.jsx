import React, { useState } from "react";

const Counter = ({ color }) => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="main-div" >
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)} style={{ backgroundColor: color }}>Click Me</button>
            </div>
        </>
    )
};

export default Counter;
