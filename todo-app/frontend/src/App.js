import './App.css';
import Header from "./components /Header";
import InputNewToDo from "./components /InputNewToDo";
import Kanban from "./components /Kanban";
import {useEffect, useState} from "react";
import {deleteRequest, getRequest, postRequest, putRequest} from "./services/RequestServices";

function App() {
    const title = "Kanban Board"

    const [toDos, setToDos] = useState([])
    const [inputText, setInputText] = useState("")

    useEffect(() => {
        console.log("get all to dos, initially")
        getAllToDos()
    }, []);

    const getAllToDos = () => {
        getRequest().then(response => setToDos(response.data))
            .then(res => console.log("get all todos called", res))
    }

    const saveInput = (event) => {
        // on every change of input text: set it to inputText
        setInputText(event.target.value)
    }

    const handleNewToDo = (event) => {
        // send a post request to create a new todoelement, followed by a get request to get the updated data
        postRequest(inputText).then(getAllToDos)
    }

    const handlesDelete = (event) => {
        // send a delete request followed by a get request to get the updated data
        console.log("delete request: ", event.target.value)
        deleteRequest(event.target.value).then(getAllToDos)
    }

    const handleSetNextStatus = (event) => {
        // Send a put request to update followed by a get request to get the updated data
        putRequest(event.target.value).then(getAllToDos)
    }

    //console.log("toDos", toDos)
    return (
        <div>
            <header>
                <Header title={title}/>
            </header>

            <main className="app__main">
                <div className="app__main__body">
                    <InputNewToDo handleNewToDo={handleNewToDo} inputText={inputText} saveInput={saveInput}/>
                </div>
                <Kanban toDos={toDos} handleSetNextStatus={handleSetNextStatus} handlesDelete={handlesDelete}/>
            </main>

            <footer>
                <p>Impressum</p>
            </footer>
        </div>
    );
}

export default App;
