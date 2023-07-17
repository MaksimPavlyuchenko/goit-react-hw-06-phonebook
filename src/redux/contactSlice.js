import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialStateContacts = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, telephone }) {
        return {
          payload: {
            name,
            telephone,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReduser = contactsSlice.reducer;
