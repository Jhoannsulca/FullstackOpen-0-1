const PersonForm = ({ handle,name,setName,number,setNumber }) => {

    return (
      <div className={"container"}>
        <form onSubmit={handle}>
          <div className={"form-group"}>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              className="form-control" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              placeholder="Nombre"
            />
          </div>
          <div className={"form-group"}>
            <label htmlFor="number">Number</label>
            <input 
              type="text" 
              className="form-control" 
              value={number} 
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Numero"
            />
          </div>
          <div>
          <button type="submit" className="btn btn-primary">Agregar Contacto</button>
          </div>
        </form>
      </div>
    )
}

export default PersonForm