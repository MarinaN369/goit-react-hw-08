import { Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch} from "react-redux";
import { useId } from "react";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  
  const nameEntryId = useId();
  const telEntryId = useId();


  const handleSubmit = ({name, number}, {resetForm} ) => {
    const nameTrim = name.trim();
    dispatch(addContact({name: nameTrim, number}))
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name</span>
            <Field className={css.input} type="text" id={nameEntryId} name="name" />
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>
          <label className={css.label}>
            <span>Number</span>
            <Field className={css.input} type="text" id={telEntryId} name="number" />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </label>
          <button className={css.button} type="submit">
            Add contacts
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;