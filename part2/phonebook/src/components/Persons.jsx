import Person from "./Person"

const Persons = ({contactos, eliminar}) => {
    return(
        <ul className="list-group">
            {contactos.map(contact =>
            <Person 
                key={contact.id} 
                contactos={contact}
                eliminar={eliminar}
            />
            )}
        </ul> 
    )
}

export default Persons