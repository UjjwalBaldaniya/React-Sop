import React, { useMemo, useState } from "react";

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    const calculation = useMemo(() => expensive(count), [count])
    // const calculation = expensive(count)

    const handleClickTwo = () => {
        setCountTwo(countTwo + 1)
    }

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <div className="main-div">
                <p>The counter Two is :- {countTwo}</p>
                <button onClick={handleClickTwo}>+</button>

                <p>The counter One is :- {count}</p>
                <button onClick={handleClick}>+</button>

                <h2>Expensive Calculation</h2>
                <p>{calculation}</p>
            </div>
        </>
    )
};

const expensive = (num) => {
    for (let i = 0; i < 300000000; i++) {
        num += 1
    } return num
}

export default UseMemo;
