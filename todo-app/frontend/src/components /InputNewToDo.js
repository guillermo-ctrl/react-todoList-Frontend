import './InputNewToDo.css'
export default function InputNewToDo(props) {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="new ToDo"
        value={props.inputText}
        onChange={props.saveInput}
      />
      <button onClick={props.handleNewToDo}>create new todo</button>
    </div>
  )
}
