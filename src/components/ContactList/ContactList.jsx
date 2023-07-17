import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/contactSlice';
import { getContacts, getFilter } from 'redux/selectors';

import { List, ListItem, Button } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filterValue = useSelector(getFilter);

  const dispatch = useDispatch();

  const filteredNames = () => {
    const filterLower = filterValue.toLowerCase().trim();

    if (contacts.length > 0) {
      const nameValue = contacts.filter(({ name }) => {
        return name.toLowerCase().includes(filterLower);
      });

      return nameValue;
    }
  };

  return (
    <>
      <List>
        {contacts.length > 0 &&
          filteredNames().map(({ name, id, telephone }) => {
            return (
              <ListItem key={id}>
                {name}: {telephone}{' '}
                <Button
                  type="button"
                  id={id}
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </Button>
              </ListItem>
            );
          })}
      </List>
    </>
  );
};
export default ContactList;
