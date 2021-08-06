import './Kanban.css'
import StatusColumn from "./StatusColumn";
export default function Kanban(props){
    return(
        <div className="kanban">
            <StatusColumn />
            <StatusColumn />
            <StatusColumn />
        </div>
    );
}