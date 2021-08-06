import './ToDo.css'
export default function ToDo(props){
    return(
    <div className="todo">
        <p>{props.description}</p>
        <button>NEXT!!!</button>
    </div>
    );
    }