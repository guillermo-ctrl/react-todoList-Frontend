import './StatusColumn.css'
import ToDo from "./ToDo";
export default function StatusColumn(props){
    const filteredToDos = props.toDos.filter(element => (element.status === props.status))
    return(
        <div className="status">
            <p>{props.status}</p>
            <section className="status__todo__card">
                {filteredToDos.map(todo => {
                    return <ToDo key = {todo.id} description={todo.description} changeStatus={props.changeStatus}
                                 id={todo.id} status={todo.status} deleteToDo={props.deleteToDo}/>
                })}
            </section>

        </div>
    );

}