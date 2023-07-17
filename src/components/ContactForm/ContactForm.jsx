import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selectors';

import { Form, Input, Button, Label } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onHandleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'telephone':
        setTelephone(value);
        break;

      default:
        break;
    }
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    const findDoubleName = contacts.find(contact => {
      return contact.name === name;
    });
    if (findDoubleName) {
      alert(`Hey,BRO!!!! ${name} is alredy in contacts`);
      setName('');
      setTelephone('');
      return;
    }

    dispatch(addContact({ name, telephone }));

    setName('');
    setTelephone('');
  };

  return (
    <>
      <Form onSubmit={onHandleSubmit}>
        <Label>
          Contact Name
          <Input
            autoFocus
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onHandleChange}
            value={name}
          />
        </Label>
        <Label>
          {' '}
          Contact Number
          <Input
            type="tel"
            name="telephone"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onHandleChange}
            value={telephone}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};

export default ContactForm;
