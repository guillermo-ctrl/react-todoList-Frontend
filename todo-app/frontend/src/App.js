
import './App.css';
import Header from "./components /Header";
import InputNewToDo from "./components /InputNewToDo";
import Kanban from "./components /Kanban";

function App() {
  const title = "Kanban Board"
  return (
    <div>
      <Header title={title}/>
      <div className="app__body">
        <InputNewToDo />
          <Kanban/>
      </div>
    </div>


  );
}

export default App;
