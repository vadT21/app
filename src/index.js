import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Provider,
} from 'react-redux';
import { 
  BrowserRouter,
} from 'react-router-dom';
import App from './App';
import store, { 
  persistor,
} from './store';
import { 
  PersistGate,
} from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <BrowserRouter>
      <PersistGate 
        loading={null}
        persistor = {persistor}
      >
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
    

);


