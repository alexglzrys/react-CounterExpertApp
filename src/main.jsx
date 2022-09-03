// Importación de librería React y ReactDOM para trabajar en el DOM del navegador
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom'
// Importar componentes
import App from './HelloWorldApp';
import FirstApp from './FirstApp';

// Toda aplicación de React tiene un punto de entrada. Por lo general es el archivo main


// Renderizar el componente en el DOM del navegador
ReactDOM.createRoot(document.getElementById('root')).render(
    // Se recomienda encarecidamente trabajar siempre en modo estricto
    <React.StrictMode>
        <App />
        <FirstApp />
    </React.StrictMode>
);