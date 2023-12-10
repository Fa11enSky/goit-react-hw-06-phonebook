import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

const App = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: '45px',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      <h2
        style={{
          fontSize: '40px',
          marginBottom: '10px',
          textAlign: 'center',
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
};
export default App;
