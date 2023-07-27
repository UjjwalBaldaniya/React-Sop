import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 1000)

    }, [])

    return (
        <>
            <div className="main-div">
                <div>
                    <p><b>1. </b>useEffect with setTimeout</p>
                    <h1>Your Count is {count}</h1>
                </div>
            </div>;
        </>
    )
};

export default UseEffect;
