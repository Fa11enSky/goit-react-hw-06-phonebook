import { useState } from 'react';
import css from './contactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/contactSlice';
import { getContacts } from 'store/selectors';
const ContactForm = ({ updateContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch();
  const handleInputName = ev => {
    setName(ev.target.value);
  };
  const handleInputNumber = ev => {
    setNumber(ev.target.value);
  };
  const handleSubmit = ev => {
    ev.preventDefault();
    const newContact = {
      name,
      number,
    };
    if (contacts.find(el => el.name.toLowerCase() === newContact.name.toLocaleLowerCase())) {
      alert(` ${newContact.name} is already in contacts`);
      return
    }
    dispatch(addContact(newContact));

    ev.target.reset();
  };
  return (
    <form className={css.main_form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.contact_input}
          onInput={handleInputName}
          type="text"
          name="name"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.contact_input}
          type="tel"
          name="number"
          required
          onInput={handleInputNumber}
        />
      </label>

      <button className={css.contact_btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;
