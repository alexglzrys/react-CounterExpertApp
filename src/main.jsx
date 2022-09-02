// Importación de librería React y ReactDOM para trabajar en el DOM del navegador
import React from 'react';
import ReactDOM from 'react-dom'

// Declaración de componente funcional
function App() {
    // Retornar código JSX - Vista del componente
    return (<h1>Hola Mundo desde Rect con Vite.</h1>)
}

// Renderizar el componente en el DOM del navegador
ReactDOM.createRoot(document.getElementById('root')).render(
    // Se recomienda encarecidamente trabajar siempre en modo estricto
    <React.StrictMode>
        <App />
    </React.StrictMode>
);