import { createSlice, createSelector } from "@reduxjs/toolkit";
import { selectNameFilter, selectContacts } from "./selectors.js";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";


export const INITIAL_STATE = {
    
    contacts: {
          items: [],
          loading: false,
    error: null,
      },
    filters: {
          name: ""
      }
  }

  
const contactsSlice = createSlice({
    name: "phonebook",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
        builder
          .addCase(fetchContacts.pending, (state) => {
            state.contacts.loading = true;
            state.contacts.error = null;
          })
          .addCase(fetchContacts.fulfilled, (state, action) => {
            state.contacts.loading = false;
            state.contacts.error = null;
            state.contacts.items = action.payload;
          })
          .addCase(fetchContacts.rejected, (state, action) => {
            state.contacts.loading = false;
            state.contacts.error = action.error.message;
          })
          .addCase(addContact.pending, (state) => {
            state.contacts.loading = true;
            state.contacts.error = null;
          })
          .addCase(addContact.fulfilled, (state, action) => {
            state.contacts.loading = false;
            state.contacts.items.push(action.payload);
          })
          .addCase(addContact.rejected, (state, action) => {
            state.contacts.loading = false;
            state.contacts.error = action.error.message;
          })
          .addCase(deleteContact.pending, (state) => {
            state.contacts.loading = true;
            state.contacts.error = null;
          })
          .addCase(deleteContact.fulfilled, (state, action) => {
            state.contacts.items = state.contacts.items.filter(
                (contact) => contact.id !== action.payload.id
              );
          })
          .addCase(deleteContact.rejected, (state, action) => {
            state.contacts.loading = false;
            state.contacts.error = action.error.message;
          })

      },
    });

export const selectFilteredContacts = createSelector(
        [selectContacts, selectNameFilter],
        (contacts, filter) => {
          return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          );  
        }
        );   
    

export const reducerPhonebook = contactsSlice.reducer;