import React from 'react';

import ReactDOM from 'react-dom/client';

import "modern-normalize";

import { Provider } from 'react-redux';

import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import {HelmetProvider } from "react-helmet-async";

import App from '../src/components/App.jsx';

import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
     <BrowserRouter>
     <HelmetProvider>
    <App />
    </HelmetProvider>
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
);
