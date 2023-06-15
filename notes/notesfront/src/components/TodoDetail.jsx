import useFetch from "./useFetch";
import {useParams} from "react-router-dom"
const TodoDetail = () => {
    const {id}=useParams()
    console.log(id)
    const { data }= useFetch('http://127.0.0.1:8000/todo/'+id)
    return ( 
        <div className="hero-cointainer">
           <h1>{data.todolist}</h1>
            <h3>{data.time}</h3>
            <h2>Status: {data.status}</h2>
        </div>
     );
}
 
export default TodoDetail;