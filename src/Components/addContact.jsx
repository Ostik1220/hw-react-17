import { useState } from "react";

const AddContact = ({ infoCollect, contacts }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) {
      alert("Будь ласка, введіть ім'я та номер");
      return;
    }


    const newContact = {
      id: `id-${contacts.length + 1}`,
      name,
      number,
    };

    infoCollect(newContact);

    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
