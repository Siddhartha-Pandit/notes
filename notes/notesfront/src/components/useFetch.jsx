import { useState,useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // axios.get('http://127.0.0.1:8000/todo/')
        axios.get(url)
            .then((response) => {
               
                const fetchdata = response.data;
                setData(fetchdata);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return { data };
}
 
export default useFetch;