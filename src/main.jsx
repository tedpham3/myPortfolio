import React from 'react'; // Importing the main React library for creating React components
import ReactDOM from 'react-dom/client'; // Importing the ReactDOM library for rendering the React component tree
import App from './App.jsx'; // Importing the App component from the App.jsx file
import './index.css'; // Importing the main CSS file for styling

// Creating the root element where the React app will be mounted
const rootElement = document.getElementById('root');

// Creating a root render node using the createRoot function from ReactDOM
const root = ReactDOM.createRoot(rootElement);

// Rendering the App component within the React.StrictMode wrapper
root.render(
  <React.StrictMode>
    <App /> 
    {/* App component is rendered as the main application */}
  </React.StrictMode>,
);