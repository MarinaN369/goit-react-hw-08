import { useEffect } from "react";
import "./App.css";
import ContactList from "../ContactList/ContactList";
// import userData from "../../user.json";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
// import {selectContacts, selectNameFilter } from "../../redux/selectors";
import { addContact, deleteContact } from "../../redux/contactsSlice";
import { changeFilter} from "../../redux/filtersSlice";

function App() {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.phonebook.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const filteredUsers = contacts.filter(
    (contact) =>
      contact.name &&
      contact.name.toLowerCase().includes((filter || "").toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(contacts));
  }, [contacts]);

  const onAddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),

    };
    dispatch(addContact(finalUser));
  };

 

  const onUserDelete = (userId) => {
    dispatch(deleteContact(userId));
  };
 

  const onChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

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