import React, { useState } from "react";

const Function = () => {
    const [count, setcount] = useState(0);

    const handleClick = () => {
        setcount(count + 1)
    }

    return (
        <>
            <div className="main-div">
                <p>With useState</p>
                <h1>{count}</h1>
                <button onClick={handleClick}>Submit</button>
            </div>
        </>
    )
};

export default Function;
