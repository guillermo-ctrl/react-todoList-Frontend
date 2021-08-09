import './ToDo.css'
export default function ToDo(props){
    return(
    <div className="todo">
        <p>{props.description}</p>
        <button onClick={props.changeStatus} value={props.id}>NEXT!!!</button>
    </div>
    );
    }