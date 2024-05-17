import { useDispatch } from "react-redux";
import useAuth from "../../hookUseAuth/HookUseAuth";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useAuth();


  return (
    <div >
      {isLoggedIn ? (
        <div className={css.userMenu}>
          <div className={css.username}>Phonebook owner: {user.name}</div>
          <button onClick={() => dispatch(logOut())} className={css.logoutButton}>
                Logout
              </button>
        </div>
      ) : (
        <span className={css.username}>Welcome, User</span>
      )}
    </div>
  );
};

export default UserMenu;