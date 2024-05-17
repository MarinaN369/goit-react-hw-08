import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { selectContacts, selectLoading } from "../redux/contacts/selectors";

import css from './Contacts.module.css'
// import DocumentTitle from "../components/DocumentTitle";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Your contact list</h1>
      <div className={css.sidebar}>
        <ContactForm />
        <SearchBox />
      </div>
      <div className={css.contactsSection}>
{isLoading && <Loader />}
      {Array.isArray(contacts) &&
        (contacts.length > 0 ? (
          <ContactList />
        ) : (
          <ErrorMessage message={"No contacts in your phonebook yet"} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;