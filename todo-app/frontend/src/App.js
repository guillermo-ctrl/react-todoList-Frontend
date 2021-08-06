
import './App.css';
import Header from "./components /Header";
import InputNewToDo from "./components /InputNewToDo";
import Kanban from "./components /Kanban";

function App() {
  const title = "Kanban Board"
  return (
    <div>
        <header>
            <Header title={title}/>
        </header>



        <main>
            <div className="app__body">
                <InputNewToDo />
            </div>
            <Kanban/>
        </main>


    <footer>
        <p>Impressum</p>
    </footer>
    </div>
  );
}

export default App;
