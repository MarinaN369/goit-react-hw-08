import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "../ContactList/ContactList";
import userData from "../../user.json";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { nanoid } from "nanoid";

function App() {
  const [users, setUsers] = useState(() => {
    const stringifiedUsers = localStorage.getItem("users");
    if (!stringifiedUsers) return userData;

    const parsedUsers = JSON.parse(stringifiedUsers);
    return parsedUsers;
  });

  const [filter, setFilter] = useState("");

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const onAddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    setUsers((prevUsers) => [...prevUsers, finalUser]);
  };

  // User deleting functionality

  const onUserDelete = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const filteredUsers = users.filter((user) => {
    const nameIncludesFilter =
      user.name && user.name.toLowerCase().includes(filter.toLowerCase());
    const numberIncludesFilter =
      typeof user.number === "string" &&
      user.number.toLowerCase().includes(filter.toLowerCase());
    return nameIncludesFilter || numberIncludesFilter;
  });

  return (
    <>
      <h1>Phonebook</h1>
      <br />
      <ContactForm onAddUser={onAddUser} />
      <SearchBox onChangeFilter={onChangeFilter} value={filter} />
      <ContactList users={filteredUsers} onUserDelete={onUserDelete} />
    </>
  );
}

export default App;