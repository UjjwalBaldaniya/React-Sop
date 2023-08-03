import React, { useEffect, useLayoutEffect, useState } from "react";

const useLayouteffect = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(0)
    }

    // useEffect(() => {
    //     console.log("useEffect");
    //     if (count === 0) {
    //         setCount(count + 22)
    //     }
    // }, [count])

    useLayoutEffect(() => {
        console.log("useLayoutEffect");
        if (count === 0) {
            setCount(count + 22)
        }
    }, [count])

    return (
        <>
            <div className="main-div">
                <h1>Your count is :- {count}</h1>
                <button onClick={handleClick}>+</button>
            </div>
        </>
    )
};

export default useLayouteffect;


// Pure component
// export default function PureComponent({name, lastName}) {
//     return (
//       <div>My name is {name} {lastName}</div>
//     )
//   }