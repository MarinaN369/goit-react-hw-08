
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    requestGetContacts,
    requestAddContact,
    requestDeleteContact,
    requestEditContact,
  } from "../../components/API";


export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll", 
    async(_, thunkAPI) => {
        try {
            const response = await requestGetContacts();
    return response;
} catch (error) {
    return thunkAPI.rejectWithValue(error.message);}});


export const addContact = createAsyncThunk("contacts/addContact", async(contact, thunkAPI)=> {try {
    const response = await requestAddContact(contact);
    return response;}
    catch (error) {
    return thunkAPI.rejectWithValue(error.message);}}
);
export const deleteContact = createAsyncThunk("contacts/deleteContact", async(contactId, thunkAPI)=> {try {
    const response = await requestDeleteContact(contactId);
    return response;}
    catch (error) {return thunkAPI.rejectWithValue(error.message);}
});
export const editContact = createAsyncThunk(
    "contacts/editContact",
    async ({ contact, id }, thunkAPI) => {
      try {
        const data = await requestEditContact(id, contact);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );