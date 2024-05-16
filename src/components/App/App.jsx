import "./App.css";
import { fetchContacts } from "../../redux/contactsOps";
import {useEffect} from "react";
import { selectLoading, selectError } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../ContactList/ContactList";
// import userData from "../../user.json";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";




const App =() => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    console.log("hello world!")
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <br />
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
       {error && <ErrorMessage message={error} />}
      <ContactList  />
    </>
  );
}

export default App;