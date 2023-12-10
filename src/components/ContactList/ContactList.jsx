import ContactsItem from 'components/ContactItem/ContactItem';
import css from './contactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'store/selectors';
const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const createRenderListContact = () => {
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  };
  return (
    <ul className={css.contacts}>
      {createRenderListContact().map(el => {
        return <ContactsItem key={el.id} contact={el} />;
      })}
    </ul>
  );
};
export default ContactList;
