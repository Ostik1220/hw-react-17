import "./App.css";
import { useState } from "react";
import AddContact from "./Components/addContact";
import ContactList from "./Components/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const collector = (newContact) => {
    if (contacts.find((contact) => contact.name === newContact.name)) {
      alert("Такий контакт уже існує");
      return;
    }
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <AddContact infoCollect={collector} contacts={contacts} />
      <h2>Contacts</h2>
      <ContactList contacts={contacts} deleteFunction={deleteContact} />
    </div>
  );
};

export default App;
