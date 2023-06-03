import './App.css';
// import Main from '../components/Mains'
import Mains from './components/Mains';
import Todo from './components/Todo';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Sidenav></Sidenav>
      <Mains></Mains>
      <Todo></Todo>
    </div>
  );
}

export default App;
