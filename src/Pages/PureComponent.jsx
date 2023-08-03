import React from "react";

const PureComponent = ({ name, lastName }) => {
    return (
        <>
            <div>
                <div>My name is {name} {lastName}</div>
            </div>
        </>
    )
};

export default PureComponent;
