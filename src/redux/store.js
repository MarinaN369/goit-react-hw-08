import { configureStore } from "@reduxjs/toolkit";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import {persistStore, persistReducer} from "redux-persist";

export const store = configureStore(

{
  foo: "123",  
  reducer: rootReducer,

    });


const initialState = {
    foo: "123",
    contacts: {
          items: []
      },
    filters: {
          name: ""
      }
  }

  const rootReducer = (state = initialState, action) => {
    return state;
  };

  export default store;
