import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NotesProvider } from "./modules/Notes";

ReactDOM.render(
  <React.StrictMode>
      <NotesProvider>
          <App />
      </NotesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
