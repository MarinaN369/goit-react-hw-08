import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 
"https://663e0f96e1913c47679661a1.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async() => {const response = await axios.get("/contacts");
    return response.data;
});
export const addContact = createAsyncThunk("contacts/addContact", async()=>{
    const response = await axios.post("/contacts");
    return response.data;
});
export const deleteContact = createAsyncThunk("contacts/deleteContact", async()=>{
    const response = await axios.delete("/contacts");
    return response.data;
});
