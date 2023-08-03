import React, { useState } from "react";
import InputField from "../Components/InputField";

const UseStateH = () => {
    const [name, setname] = useState("");
    const [checkbox, setCheckbox] = useState(true);
    const [first, setFirst] = useState("");
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count => count + 1)
    }

    return (
        <>
            <div className="main-div">
                <div>
                    <p><b>1. </b>useState Example with Text</p>
                    {/* <input type="text" placeholder="name" value={name} onChange={(e) => setname(e.target.value)} style={{ padding: "5px" }} /> */}

                    <InputField type={"text"} placeholder={"name"} value={name} onChange={(e) => setname(e.target.value)} />

                    <p>The Name is :- <b>{name}</b> </p>
                    <button onClick={() => setname("")}>Reset</button>
                </div>

                <div style={{ marginTop: '2rem' }}>
                    <p><b>2. </b>useState Example with Checkbox</p>
                    <label>
                        <input type="checkbox" checked={checkbox} onChange={(e) => setCheckbox(e.target.checked)} />
                    </label>
                    {checkbox ? " You liked it" : " You did't liked it"}
                </div>

                <div style={{ marginTop: '2rem' }}>
                    <p><b>3. </b>useState with multiple state</p>
                    {/* <input type="text" placeholder="name" value={first} onChange={(e) => setFirst(e.target.value)} style={{ padding: "5px" }} /> */}

                    <InputField type={'text'} placeholder={"abc"} value={first} onChange={(e) => setFirst(e.target.value)} />

                    <button onClick={() => { handleCount(); handleCount(); handleCount(); }}>+3</button>
                    <button onClick={() => { handleCount(); }}>+1</button>
                    <p>hi <b>{first}</b>, your count is <b>{count}</b>.</p>
                </div>

            </div >
        </>
    )
};

export default UseStateH;
