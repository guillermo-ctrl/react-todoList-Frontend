import './Kanban.css'
import StatusColumn from "./StatusColumn";
export default function Kanban(props){
    return(
        <div className="kanban">
            <StatusColumn status="OPEN" toDos={props.toDos}/>
            <StatusColumn />
            <StatusColumn />
        </div>
    );
}