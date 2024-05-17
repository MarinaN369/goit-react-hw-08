import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.AuthNavContainer}>
      <NavLink to="/register" className={css.AuthNavLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.AuthNavLink}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;