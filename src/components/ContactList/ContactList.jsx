import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/contactSlice';
import { getContacts, getFilter } from 'redux/selectors';

import { List, ListItem, Button } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filterName = useSelector(getFilter);

  const dispatch = useDispatch();

  const filteredName = () => {
    const filterLower = filterName.toLowerCase();
    console.log(filterLower);
    if (contacts) {
      const filteredName = contacts.filter(({ name }) => {
        return name.toLowerCase().trim().includes(filterLower);
      });
      return filteredName;
    }
  };

  return (
    <>
      <List>
        {filteredName().map(({ name, id, telephone }) => {
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
