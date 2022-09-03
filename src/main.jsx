// Importación de librería React y ReactDOM para trabajar en el DOM del navegador
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client'
// Importar componentes
import App from './HelloWorldApp';
import FirstApp from './FirstApp';

// Para estilos CSS Globales, se importan directamente en el archivo principal de la aplicación
// Se puede usar CSS, SASS, LESS, STYLUS, Styles Components, etc. en React - Pero es importante instalar el paquete previamente si se esta trabajando con un preprocesador de CSS, así como configurarlo en el constructor de paquetes (Create-React-App ya viene configruados por defecto), en Vite se encarga tras bambalinas de ello, sin embargo, si trabajamos directamente con Webpack, habra que buscar el loader y configurarlo a mano.
import './App.css';

// Toda aplicación de React tiene un punto de entrada. Por lo general es el archivo main


// Renderizar el componente en el DOM del navegador
ReactDOM.createRoot(document.getElementById('root')).render(
    // Se recomienda encarecidamente trabajar siempre en modo estricto
    <React.StrictMode>
        <App />
        <FirstApp />
    </React.StrictMode>
);