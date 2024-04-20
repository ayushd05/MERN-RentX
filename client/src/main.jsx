import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { store , persistor} from './redux/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <PersistGate loading ={null} persistor={persistor}>
    <App />
  </PersistGate> 
  </Provider>,
)
