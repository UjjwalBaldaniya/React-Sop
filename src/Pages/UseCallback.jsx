import React, { useCallback, useState } from "react";
import Callbackcom from "../Components/Callbackcom";

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    console.log("Parent Component redered");

    const handleClick = () => {
        setCount(count + 1)
    }

    const func = useCallback(() => {
        console.log("hello");
    }, [countTwo])

    return (
        <>
            <div className="main-div">
                <Callbackcom countTwo={countTwo} func={func} />
                <p>Count :- {count}</p>
                <button onClick={handleClick}>Increment +</button>
            </div>
        </>
    )
};

export default UseCallback;
