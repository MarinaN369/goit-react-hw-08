import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const example = axios.create({
    baseURL: "https://663e0f96e1913c47679661a1.mockapi.io/"
});


export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll", 
    async(_, thunkAPI) => {
        try {
            const response = await example.get("/contacts");
    return response.data;
} catch (error) {
    return thunkAPI.rejectWithValue(error.message);}});


export const addContact = createAsyncThunk("contacts/addContact", async(contact, thunkAPI)=> {try {
    const response = await example.post("/contacts", {...contact});
    return response.data;}
    catch (error) {
    return thunkAPI.rejectWithValue(error.message);}}
);
export const deleteContact = createAsyncThunk("contacts/deleteContact", async(contactId, thunkAPI)=> {try {
    const response = await example.delete(`/contacts/${contactId}`);
    return response.data;}
    catch (error) {return thunkAPI.rejectWithValue(error.message);}
});
