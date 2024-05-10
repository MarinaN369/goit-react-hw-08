import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
    
    contacts: {
          items: []
      },
    filters: {
          name: ""
      }
  }

  
const contactsSlice = createSlice({
    name: "phonebook",
    initialState: INITIAL_STATE,
    redusers: {
        addContact (state, action) {
            state.contacts.items.push(action.payload);
           },
        deleteContact (state, action) {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
           },   
    },
})

export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;

export const reducerPhonebook = contactsSlice.reducer;