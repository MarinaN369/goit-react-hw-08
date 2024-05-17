import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const requestRegister = async (formData) => {
  const { data } = await axios.post("/users/signup", formData);
  setToken(data.token);

  return data;
};

export const requestLogin = async (formData) => {
  const { data } = await axios.post("/users/login", formData);
  setToken(data.token);

  return data;
};

export const requestGetCurrentUser = async () => {
  const { data } = await axios.get("/users/current");

  return data;
};

export const requestLogOut = async () => {
  const { data } = await axios.post("/users/logout");
  clearToken();

  return data;
};

export const requestGetContacts = async () => {
  const { data } = await axios.get("/contacts");

  return data;
};

export const requestAddContact = async (contact) => {
  const { data } = await axios.post("/contacts", contact);

  return data;
};

export const requestDeleteContact = async (contactId) => {
  const { data } = await axios.delete(`/contacts/${contactId}`);

  return data;
};

export const requestEditContact = async (contactId, contact) => {
  const { data } = await axios.patch(`/contacts/${contactId}`, contact);

  return data;
};