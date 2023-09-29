import React, { useReducer } from "react";

const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        checked: false,
        type: "checkbox"
    },
    {
        id: 2,
        title: "Todo 2",
        checked: false,
        type: "checkbox"
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, checked: !todo.checked };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
}

const Reducerr = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <input {...todo} onChange={() => handleComplete(todo)} />
                    {todo.title}
                </div>
            ))}
        </>
    )
};

export default Reducerr;
