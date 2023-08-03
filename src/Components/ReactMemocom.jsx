import React, {memo} from "react";

const ReactMemocom = ({todos}) => {
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
        </>
    );
};

export default memo(ReactMemocom);
