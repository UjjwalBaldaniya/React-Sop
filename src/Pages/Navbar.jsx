import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div>
                <ul className="ul">
                    <Link to={'/'} className="ul">Props</Link>
                    <Link to={'/listkey'} className="ul">List-Key</Link>
                    <Link to={'/class'} className="ul">Class</Link>
                    <Link to={'/useState'} className="ul">useState</Link>
                    <Link to={'/useEffect'} className="ul">useEffect</Link>
                    <Link to={'/useMemo'} className="ul">useMemo</Link>
                    <Link to={'/useCallback'} className="ul">useCallback</Link>
                    <Link to={'/useLayoutEffect'} className="ul">useLayoutEffect</Link>
                    <Link to={'/reactMemo'} className="ul">React.Memo</Link>
                    <Link to={'/useContext'} className="ul">useContext</Link>
                    <Link to={'/pureComponent'} className="ul">Pure Component</Link>
                </ul>
                <hr />
                <hr className="hr" />
            </div>
        </>
    )
};

export default Navbar;
