import './ToDo.css'
export default function ToDo(props){

    return(
        <div className="todo">
            <p>{props.todo.description}</p>
            {props.todo.status!=="DONE" && (<button onClick={props.handleSetNextStatus} value={props.todo.id}>NEXT!!!</button>)}
            {props.todo.status==="DONE" && (<button onClick={props.handlesDelete} value={props.todo.id}>DELETE!!!</button>)}
        </div>
        );
    }