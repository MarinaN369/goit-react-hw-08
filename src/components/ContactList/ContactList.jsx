import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
// import {selectContacts, selectNameFilter } from "../../redux/selectors";
import {  useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {selectFilteredContacts} from '../../redux/filters/selectors';

// const filteredUsers = (contacts, filterValue) => {
//   return contacts.filter((contact) =>{
//      return contact.name.toLowerCase().includes(filterValue.toLowerCase())}
//   )
// }
const ContactList = () => {
  
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.contactList}>
      {filteredContacts.map((contact) => 
                    <li key={ nanoid()}>
                    <Contact name={contact.name} number={contact.number} id={contact.id}/>
                </li>
                )}
      </ul>
    </div>
  );
};

export default ContactList;