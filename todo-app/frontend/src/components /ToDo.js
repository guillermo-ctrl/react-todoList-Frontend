import './ToDo.css'
export default function ToDo(props){
    return(
    <div className="todo">
        <p>{props.description}</p>
        { props.status!=="DONE" &&  <button onClick={props.changeStatus} value={props.id}>NEXT!!!</button>}
        { props.status==="DONE" &&  <button onClick={props.deleteToDo} value={props.id}>DELETE!!!</button>}
    </div>
    );
    }