import { configureStore } from "@reduxjs/toolkit";
import { reducerPhonebook } from "./contactsSlice";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import {persistStore, persistReducer} from "redux-persist";

export const store = configureStore(

{
  foo: "123",  
  reducer: reducerPhonebook,

    });






  export default store;
