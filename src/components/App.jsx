import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { Header, HeaderList } from './App.styled';

const App = () => {
  return (
    <div
      style={{
        marginTop: '150',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {' '}
      <Header>Phonebook</Header>
      <ContactForm />
      <HeaderList>Contact List</HeaderList>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
