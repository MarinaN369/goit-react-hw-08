import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/operations";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";


export const INITIAL_STATE = {
    
    contacts: {
          items: null,
          loading: false,
    error: null,
      },
    // filters: {
    //       name: ""
    //   }
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
          .addCase(editContact.pending, (state) => {
            state.contacts.loading = true;
          state.contacts.error = null;
        })
          .addCase(editContact.fulfilled, (state, action) => {
            state.contacts.loading = false;
            state.contacts.error = null;
            state.contacts.items = state.contacts.items.map((contact) => {
              if (contact.id === action.payload.id) {
                return action.payload;
              }
              return contact;
            });
          })
          .addCase(editContact.rejected, (state, action)=> {
            state.contacts.loading = false;
            state.contacts.error = action.error.message;
          })
          .addCase(logOut.fulfilled, () => INITIAL_STATE);

      },
    });



export const reducerPhonebook = contactsSlice.reducer;