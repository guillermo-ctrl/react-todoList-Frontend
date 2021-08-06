import './Kanban.css'
import StatusColumn from "./StatusColumn";
export default function Kanban(props){
    console.log(props)
    return(
        <div className="kanban">
            <StatusColumn status="OPEN" toDos={props.toDos}/>
            <StatusColumn status="IN PROGRESS" todos={props.toDos}/>
            <StatusColumn status="DONE" todos={props.toDos}/>
        </div>
    );
}