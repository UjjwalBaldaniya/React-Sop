import React from "react";

const InputField = ({ type, placeholder, value , onChange}) => {
    return (
        <>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} style={{ padding: "5px" }}/>
        </>
    )
};

export default InputField;
