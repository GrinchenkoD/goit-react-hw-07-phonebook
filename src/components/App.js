import ContactForm from "./contactForm/ContactForm";
import ContactFilter from "./contactsFilter/ContactFilter";
import ContactList from "./contactList/ContactList.jsx";

function App() {
  return (
    <div className="thumb">
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </div>
  );
}

export default App;
