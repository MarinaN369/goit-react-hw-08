import { configureStore } from "@reduxjs/toolkit";
import { reducerPhonebook } from "./contactsSlice";
import { filterReducer} from "./filtersSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { devToolsEnhancer } from "@redux-devtools/extension";

const persistConfig = {
  key: 'phonebook',
  storage,
};


export const store = configureStore(

{
  
  reducer: {
  phonebook: persistReducer(persistConfig, reducerPhonebook),
  filters: filterReducer,
}
    });

    export const persistor = persistStore(store);
