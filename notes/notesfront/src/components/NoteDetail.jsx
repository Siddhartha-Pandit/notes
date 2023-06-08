import useFetch from "./useFetch";
import {useParams} from "react-router-dom"
const NoteDetail = () => {
    const {id}=useParams()
    
    const { data }= useFetch('http://127.0.0.1:8000/note/'+id)
    
    return ( 
        <div>
          <h1>{data.title}</h1>
          <p>{data.detail}</p>
        </div>
     );
}
 
export default NoteDetail;