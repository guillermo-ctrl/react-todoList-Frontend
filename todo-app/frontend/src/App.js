
import './App.css';
import Header from "./components /Header";
import InputNewToDo from "./components /InputNewToDo";
import Kanban from "./components /Kanban";
import {useEffect, useState} from "react";

function App() {
  const title = "Kanban Board"

    useEffect(() => {
        fetch("/api/todo")
            .then((response) => response.json())
            .then((toDoArray) => setToDos(toDoArray))
            .catch((error) => console.error(error));
    }, []);

    const [toDos, setToDos] = useState([])
    const [inputText, setInputText] = useState("")

    const handleNewToDo = (event) => {
      console.log("new item erstellen: ", inputText)
    }
    const saveInput = (event) => {
      setInputText(event.target.value)
      console.log("Value: ", event.target.value)
        console.log("toDos", toDos)
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
            <Kanban toDos={toDos}/>
        </main>

    <footer>
        <p>Impressum</p>
    </footer>
    </div>
  );
}

export default App;
