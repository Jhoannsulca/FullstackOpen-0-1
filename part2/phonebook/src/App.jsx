import { useEffect, useState } from 'react'

import contactService from './services/contacts'
import Notification from './components/Notification'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [contacts, setContacts] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')


  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => {
        setContacts(initialContacts)
      })
  }, [contacts])

  const contactsToShow = showAll
    ? contacts
    : newSearch
  
  const handleSearch = (e) => {
    setShowAll(false)
    const filteredContact = contacts.filter(contact => 
      contact.name.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setNewSearch(filteredContact)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newContact = {
      id: `${contacts.length + 1}`,
      name: newName,
      number: newNumber
    }
    const existingContact = contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())
    const text = `${newContact.name} ya existe entre tus contactos, reemplazar el número?`
    if (existingContact && window.confirm(text)) {
      toggleNumber(existingContact.id)
    } else {
      setContacts([...contacts], newContact)

      contactService
        .create(newContact)
        .then(returnedContact => {
          setContacts(contacts.concat(returnedContact))
          setSuccessMessage(`Añadió a ${newContact.name}`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          setErrorMessage(`Ocurrió un problema al añadir a '${newContact.name}'`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setContacts(contacts.filter(contact => contact.id !== newContact.id))
        })
    }

  }
  const toggleNumber = (id) => {
    const contact = contacts.find(c => c.id === id)
    const changeContact = {...contact, number: newNumber}
   
    contactService
      .update(id, changeContact)
      .then(returnedContact => {
        setContacts(contacts.map(contact => contact.id !== id ? contact : returnedContact))
        setSuccessMessage(`El número de '${contact.name}' ha cambiado con éxito`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      })
      .catch(error => {
        setErrorMessage(`Al perecer '${contact.name}' se eliminó de tus contactos`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
      })
  }
  
  const handleDelete = (id) => {
    contactService
     .eliminar(id)
     .catch(error => {
        alert(`Ocurrió un problema`)
      })
  }
  
  return (
    <div className={'container'}>
      <h2>Phonebook</h2>
      <Notification messageError={errorMessage} messageSuccess={successMessage}/>
      <Filter controladorBusqueda={handleSearch}></Filter>

      <PersonForm handle={handleSubmit} name={newName} setName={setNewName} number={newNumber} setNumber={setNewNumber}/>

      <h3>Numbers</h3>
      <Persons contactos={contactsToShow} eliminar={handleDelete}/>
    </div>
  )
}

export default App