import React, { useState } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameToSearch, setNameToSearch] = useState('');

  const addPerson = (event) => {
    event.preventDefault();

    // If there are no people in the persons array with this name
    if (!persons.some((p) => p.name === newName)) {
      const nameObject = {
        name: newName,
        number: newNumber,
      };

      setPersons(persons.concat(nameObject));
      setNewName('');
    } else {
      alert(`${newName} already exists in the phonebook.`);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNameToSearchChange = (event) => {
    setNameToSearch(event.target.value);
  };

  const peopleToShow =
    nameToSearch === ''
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(nameToSearch.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        nameToSearch={nameToSearch}
        handleNameToSearchChange={handleNameToSearchChange}
      />
      <h2>add a new person</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons peopleToShow={peopleToShow} />
    </div>
  );
};

export default App;
