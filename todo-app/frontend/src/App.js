import './App.css';
import Header from "./components /Header";
import InputNewToDo from "./components /InputNewToDo";
import Kanban from "./components /Kanban";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const title = "Kanban Board"


    const [toDos, setToDos] = useState([])
    const [inputText, setInputText] = useState("")

    useEffect(() => {
        getAllToDos()
    }, []);
    useEffect(() => {
        console.log("Marking stuff: ", toDos)
    }, [toDos])



    const changeStatus = (event) => {
        const path= "/api/todo/" + event.target.value
        console.log(path)

        axios.put(path, {})
            .then(getAllToDos)
            .catch(e=>console.error(e))

        }

    const getAllToDos = () => {
        axios.get("/api/todo")
            .then((response) => setToDos(response.data))
            .catch((error) => console.error(error));
    }

    const handleNewToDo = (event) => {
        console.log("new item erstellen: ", inputText)
        axios.post('/api/todo', {
            description: inputText
        })
            .then(getAllToDos)
            .catch(e=>console.error(e))
        console.log("new ToDo posted" , inputText)
    }

    const saveInput = (event) => {
        setInputText(event.target.value)
        console.log("Value: ", event.target.value)
    }

    const deleteToDo = (event) => {
        console.log("deleteToDo wird aufgerufen")
        const path= "/api/todo/" + event.target.value
        axios.delete(path)
            .then(getAllToDos)
            .catch(e=>console.error(e))
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
                <Kanban toDos={toDos} changeStatus={changeStatus} deleteToDo={deleteToDo}/>
            </main>

            <footer>
                <p>Impressum</p>
            </footer>
        </div>
    );
}

export default App;
