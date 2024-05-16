import css from "./Contact.module.css";
import { FaUserLarge } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import {useDispatch} from "react-redux";
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id))
  return (
    <div className={css.contactContainer}>
      <li className={css.contactItem}>
        <p className={css.userdata}>
          <FaUserLarge />
          {name}
        </p>
        <p className={css.userdata}>
          <FaPhoneAlt />
          {number}
        </p>
      </li>
      <button
        className={css.button}
        type="button"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;