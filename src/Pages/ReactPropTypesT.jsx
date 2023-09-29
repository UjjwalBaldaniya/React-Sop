import React from "react";
import PropTypes from 'prop-types';

const ReactPropTypesT = ({ name, age }) => {
    console.log(age, name);
    return (
        <>
            <div>{name + age}</div>
        </>
    )
};

ReactPropTypesT.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
};

export default ReactPropTypesT;
