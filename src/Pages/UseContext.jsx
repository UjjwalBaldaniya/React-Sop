import React, { useContext } from "react";
import { AppContext } from "../Components/Context";

const UseContext = () => {
    const name = useContext(AppContext)
    return (
        <>
            <div className="main-div">
                <p>useContext with provider <b>{name}</b></p>
            </div>
        </>
    )
};

export default UseContext;
