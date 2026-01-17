import { Component } from "react";
import { useState } from "react";

const ContactList = ({ contacts, deleteFunction }) => {
  const [filter, setFilter] = useState("");

  console.log("Contacts:", contacts);

  const valueCollector = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search contacts..."
        onChange={valueCollector}
        value={filter}
      />
      <ul>
        {contacts
          ?.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <li key={contact.id}>
              {contact.name} : {contact.number}
              <button onClick={() => deleteFunction(contact.id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};


export default ContactList;
