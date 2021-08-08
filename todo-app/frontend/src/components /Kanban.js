import './Kanban.css'
import StatusColumn from './StatusColumn'
export default function Kanban(props) {
  return (
    <div className="kanban">
      <StatusColumn
        status="OPEN"
        toDos={props.toDos}
        handleSetNextStatus={props.handleSetNextStatus}
        handlesDelete={props.handlesDelete}
      />
      <StatusColumn
        status="IN_PROGRESS"
        toDos={props.toDos}
        handleSetNextStatus={props.handleSetNextStatus}
        handlesDelete={props.handlesDelete}
      />
      <StatusColumn
        status="DONE"
        toDos={props.toDos}
        handleSetNextStatus={props.handleSetNextStatus}
        handlesDelete={props.handlesDelete}
      />
    </div>
  )
}
