import React from "react";

const LIstKey = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <>
            <div className="main-div">
                <p>List and Key :-</p>
                {array.map((element, index) => (
                    <ul key={index}>
                        <li>{element * 50}</li>
                    </ul>
                ))}
            </div>
        </>
    )
};

export default LIstKey;
