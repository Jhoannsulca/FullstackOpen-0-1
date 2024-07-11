const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

    return (
      <li className="note list-group-item">
        {note.content}
        <button className="btn btn-primary" onClick={toggleImportance}>{label}</button>
      </li>
    )
  }
  
  export default Note