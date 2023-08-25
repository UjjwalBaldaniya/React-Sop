import React from "react";
import Counter from "../Components/Counter";
import UseHoc from "../Components/UseHoc";

const Hoc = () => {
    return (
        <>
            {/* <Counter /> */}
            <UseHoc HocComponent={Counter} />
        </>
    )
};

export default Hoc;