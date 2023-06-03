import { useEffect } from "react";
import axios from 'axios'

const Mains = () => {
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/note/')
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
    return ( 
        <div>This is main component</div>
     );
}
 
export default Mains;