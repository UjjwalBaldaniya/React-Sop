import React from "react";

const UseHoc = ({ HocComponent }) => {
    return (
        <>
            <HocComponent color={'red'}/>
            <HocComponent color={'Yellow'}/>
        </>
    )
};

export default UseHoc;
