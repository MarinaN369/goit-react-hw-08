import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };
console.log('work')
  return (
    <form className={css.registerForm} onSubmit={handleSubmit} autoComplete="off">
      <div className={css.formItem}>
        <label className={css.label}>
          Username
          <input type="text" name="name" className={css.formField} />
        </label>
      </div>
      <div className={css.formItem}>
        <label className={css.label}>
          Email
          <input type="email" name="email" className={css.formField}/>
        </label>
      </div>
      <div className={css.formItem}>
        <label className={css.label}>
          Password
          <input type="password" name="password" className={css.formField}/>
        </label>
      </div>
      <button type="submit" className={css.submitButton}>Register</button>
    </form>
  );
};

export default RegisterForm;