import './StatusColumn.css'
import ToDo from "./ToDo";
export default function StatusColumn(props){
    return(
        <div className="status">
            <p>{props.status}</p>
            <section className="status__todo__card">
                {props.toDos?.map(todo => {
                    return <ToDo key = {todo.id} description={todo.description} />
                })}
            </section>

        </div>
    );

}