import React, { useEffect, useState } from "react";

const UseEffectH = () => {

    const [count, setCount] = useState(0);
    const [apiData, setApiData] = useState([]);


    const handleClick = () => {
        setCount(count + 1)
    }

    const API = async () => {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        console.log(data);
        setApiData(data)
    }

    useEffect(() => {
        console.log("ujjwal baldaniya");

        API()
    }, [])
    return (
        <>
            <div className="main-div">
                <div>
                    <p><b>1. </b>useEffect</p>
                    <h1>{count}</h1>
                    <button onClick={handleClick}>Add</button>
                </div>

                {apiData.map((element, index) => {
                    return (
                        <>
                            <div key={index}>
                                <p>{element.title}</p>
                                <p>{element.price}</p>
                            </div>
                        </>
                    )
                })}

            </div>
        </>
    )
};

export default UseEffectH;
