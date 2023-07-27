import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div>
                <ul className="ul">
                    <Link to={'/'} className="ul">Home</Link>
                    <Link to={'/props'} className="ul">Props</Link>
                    <Link to={'/listkey'} className="ul">ListKey</Link>
                    <Link to={'/function'} className="ul">Function</Link>
                    <Link to={'/class'} className="ul">Class</Link>
                    <Link to={'/useState'} className="ul">useState</Link>
                    <Link to={'/useEffect'} className="ul">useEffect</Link>
                </ul>
                <hr />
                <hr className="hr" />
            </div>
        </>
    )
};

export default Navbar;
