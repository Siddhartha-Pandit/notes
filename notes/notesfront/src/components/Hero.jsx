import Mains from './Mains';
import Todo from './Todo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Hero = () => {
    return (
        <div className='hero-topcointainer'>
            <div className='hero-cointainer'>
                <Routes>
                    <Route path="/" element={<Mains />} />
                    <Route path="/todo" element={<Todo />} />
                </Routes>

            </div>
        </div>
    );
}

export default Hero;