import React, { useEffect, memo } from "react";

const Callbackcom = () => {
    console.log("child component render");

    return (
        <>
            <h1>Child Component</h1>
        </>
    )
};

export default memo(Callbackcom);
