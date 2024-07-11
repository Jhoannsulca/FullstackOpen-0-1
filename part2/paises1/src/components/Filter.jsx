const Filter = (props) => {


    return (
        <div className='container'>
            <label>Country</label>
            <input 
                type="text" 
                placeholder='Buscar pais...'
                onChange={props.controladorBusqueda}
            />
        </div>
    )
}

export default Filter