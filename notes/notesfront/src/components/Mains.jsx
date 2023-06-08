import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
const Mains = () => {


    const { data }= useFetch('http://127.0.0.1:8000/note/')

    return (
        <div>

            <div className="hero-cointainer notes">

                {data.map((noteData) => (
                    <div key={noteData.id}>
                        <Link to={`/note/${noteData.id}`} style={{ textDecoration: 'none' }} >
                            <div className="note-cointainer">

                                <h3 >{noteData.title}</h3>
                                <p>{noteData.title}</p>

                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Mains;
