
const Person = ({ contactos, eliminar }) => {
  const handleDelete = () => {
    if (window.confirm('Eliminar contacto ?')) {
      eliminar(contactos.id)
    }
    return
  }
  return (
      <li className="list-group-item">
        {contactos.name}
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </li>
  )
}

export default Person