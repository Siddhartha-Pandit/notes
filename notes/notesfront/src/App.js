import './App.css';
// import Main from '../components/Mains'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidenav from './components/Sidenav';
import Mains from './components/Mains';
import Todo from './components/Todo';
import Add from './components/Add';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoteDetail from './components/NoteDetail';
import TodoDetail from './components/TodoDetail';
import AddNotes from './components/AddNotes';
import AddTodo from './components/AddTodo';

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
            <Route path="/note/:id" element={<NoteDetail />} />
            <Route path="/todo/:id" element={<TodoDetail />} />
            <Route path="/notes/add" element={<AddNotes />} />
            <Route path="/todo/add" element={<AddTodo />} />
          </Routes>
          <Add></Add>
        </div>
      </div>
    </Router >
  );
}

export default App;
