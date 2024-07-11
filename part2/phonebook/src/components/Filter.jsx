const Filter = (props) => {


    return (
        <div className='container'>
            <input 
                type="text" 
                placeholder='Buscar contacto...'
                onChange={props.controladorBusqueda}
            />
        </div>
    )
}

export default Filter