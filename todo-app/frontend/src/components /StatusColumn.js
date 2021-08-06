import './StatusColumn.css'
import ToDo from "./ToDo";
export default function StatusColumn(props){
    return(
        <div className="status">
            <p>Leckerer Inhalt</p>
            <ToDo/>

        </div>
    );

}