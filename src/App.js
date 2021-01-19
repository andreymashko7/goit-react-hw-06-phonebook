import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

export default function App() {
  return (
    <div className="main_container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

// const [contacts, setContacts] = useState(() => {
//   return JSON.parse(window.localStorage.getItem('contacts')) ?? baseContacts;
// });
// // const [filter, setFilter] = useState('');

// useEffect(() => {
//   return localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);
