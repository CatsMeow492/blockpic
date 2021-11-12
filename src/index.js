import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import FirebaseContext from './context/firebase';

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />, 
    </FirebaseContext.Provider>
    document.getElementById('root'));

// reportWebVitals();


// client side rendered app: react (cra)
    // -> database which is Firebase
    // -> react-loading-skeleton
    // tailwind

// folder structure
    // src
        // -> componenets, 
        // -> constants, 
        // -> context, 
        // -> helpers, 
        // -> lib (firebase is going to live in here), 
        // -> services (firebase functions in here)
        // -> styles (tailwind's folder (app/tailwind))