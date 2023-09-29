import React from "react";
import { Helmet } from "react-helmet";  

const ReactHelmet = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>Helmet 👩‍💻 😀</title>
                </Helmet>
                <p>This time title will be Child Component Rocks!</p>
            </div>
        </>
    )
};

export default ReactHelmet;
