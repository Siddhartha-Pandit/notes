import { useState,useEffect } from "react";
import axios from "axios";
const Todo = () => {
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/todo/')
            .then((response) => {
               
                const fetchdata = response.data;
                setTodo(fetchdata);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return ( 
        <div>
            <div className="hero-cointainer todo">
                
                {todo.map((todoData)=>(
                    <div  className= "todo-cointainer" key={todoData.id}>
                       <h3>{todoData.todolist}</h3>
                       <p>Time: {todoData.time} status:{todoData.status}</p>
                       
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Todo;