import './Kanban.css'
import StatusColumn from "./StatusColumn";
export default function Kanban(props){


    return(
        <div className="kanban">
            <StatusColumn status="OPEN" toDos={props.toDos}/>
            <StatusColumn status="IN_PROGRESS" toDos={props.toDos}/>
            <StatusColumn status="DONE" toDos={props.toDos}/>
        </div>
    );
}