import './App.css';
import { ToDoList } from './ToDo';
import doIt from './doIt.jpeg'

function App() {
  return (
    <div className="App">
      <img src={doIt} width="200px" alt="Do It Now" className='top-image'></img>
      <h1>Let's plan your day</h1>
      <ToDoList/>
    </div>
  );
}

export default App;
