import './App.css';
// import Main from '../components/Mains'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidenav from './components/Sidenav';
import Mains from './components/Mains';
import Todo from './components/Todo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>

      <div className="App">

        <Navbar />


        <Sidenav />
        {/* <Hero />
           */}
        <div className='feature-cointainer'>

          <Routes>
            <Route path="/" element={<Mains />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </div>
      </div>
    </Router >
  );
}

export default App;
