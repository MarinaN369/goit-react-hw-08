import { configureStore } from "@reduxjs/toolkit";
import { reducerPhonebook } from "./contacts/slice";
import { filtersReducer} from "./filters/slice";
import { persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from "./auth/slice";
// import { devToolsEnhancer } from "@redux-devtools/extension";

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ["token"],
};


export const store = configureStore(

{
  
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
  phonebook: reducerPhonebook,
  filters: filtersReducer,
},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    });

    export const persistor = persistStore(store);
