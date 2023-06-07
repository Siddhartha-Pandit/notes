import { useEffect, useState } from "react";
import axios from 'axios';

const Mains = () => {
    const [data, setData] = useState([]);
   

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/note/')
            .then((response) => {
               
                const fetchdata = response.data;
                setData(fetchdata);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
           
            <div className="hero-cointainer notes">
                
                {data.map((noteData) => (
                    <div className="note-cointainer" key={noteData.id}>
                        <h3>{noteData.title}</h3>
                        <p>{noteData.title}</p>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default Mains;
