
import './App.css';
import Header from "./components /Header";
import InputNewToDo from "./components /InputNewToDo";
import Kanban from "./components /Kanban";
import {useState} from "react";

function App() {
  const title = "Kanban Board"
    const [inputText, setInputText] = useState("")

    const handleNewToDo = (event) => {
      console.log("new item erstellen: ", inputText)
    }
    const saveInput = (event) => {
      setInputText(event.target.value)
      console.log("Value: ", event.target.value)
    }

  return (
    <div>
        <header>
            <Header title={title}/>
        </header>

        <main>
            <div className="app__body">
                <InputNewToDo handleNewToDo={handleNewToDo} inputText={inputText} saveInput={saveInput}/>
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
