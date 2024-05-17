import css from "./Home.module.css";
import { NavLink } from "react-router-dom";
import useAuth from "../hookUseAuth/HookUseAuth";
import { useState } from "react";

const Home = () => {
  const [isHoveredLog, setIsHoveredLog] = useState(false);
  const [isHoveredReg, setIsHoveredReg] = useState(false);

  const handleMouseEnterLog = () => {
    setIsHoveredLog(true);
  };

  const handleMouseLeaveLog = () => {
    setIsHoveredLog(false);
  };

  const handleMouseEnterReg = () => {
    setIsHoveredReg(true);
  };

  const handleMouseLeaveReg = () => {
    setIsHoveredReg(false);
  };

  const { isLoggedIn } = useAuth();

  return (
    <div className={css.phonebook-container}>
      <h1 className={css.phonebook}> Phonebook </h1>
      <h2 className={css.hello-phonebook}>
        Welcome to Phonebook!
      </h2>
      {isLoggedIn ? (
        <p className={css.phone-manage}>
          Manage your contacts{" "}
        </p>
      ) : (
        <>
          <p className={css.phone-order}>
            In order to use Phonebook, please log in or register.
          </p>
          <div className={css.navlink-container}>
            <NavLink className={css.login}
              to="/login"
                onMouseEnter={handleMouseEnterLog}
                onMouseLeave={handleMouseLeaveLog}
            >
              Login
            </NavLink>
            <NavLink className={css.register}
              to="/register"
                onMouseEnter={handleMouseEnterReg}
                onMouseLeave={handleMouseLeaveReg}
            >
              Register
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;