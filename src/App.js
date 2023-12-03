import './App.css';
import { ToDoList } from './ToDo';
import doIt from './doIt.jpeg'
// import { IconChange } from './IconChange';

function App() {
  return (
    <div className="App">
      <img src={doIt} width="200px" alt="Do It Now" className='top-image'></img>
      <h1>Let's plan your day</h1>
      <ToDoList/>
      {/* <IconChange/> */}
    </div>
  );
}

export default App;
