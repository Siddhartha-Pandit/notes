import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import useFetch from "./useFetch";
const Todo = () => {
    const { data: todo } = useFetch('http://127.0.0.1:8000/todo/')

    return (
        <div>
            <div className="hero-cointainer todo">

                {todo.map((todoData) => (
                    <div key={todoData.id}>
                        <Link to={`/todo/${todoData.id}`} style={{ textDecoration: 'none' }} >
                            <div className="todo-cointainer">
                                <h3>{todoData.todolist}</h3>
                                <p>Time: {todoData.time} status:{todoData.status}</p>
                            </div>
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todo;