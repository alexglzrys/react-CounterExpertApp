## Básicos de React

A diferencia de Create React App que usa Webpack, Vite es más rápido en cuanto a Hot Module Reload y configuración.

## ReactJS + Vite

Crear un proyecto de React con Vite

```
npm create vite@latest
```

El asistente preguntará por el nombre de la aplicación y si usará JS Vanilla o alguna librería o framework de JS para trabajar, del mismo modo, preguntará si se desea usar JS o TS.

Para ejecutar el proyecto basta con el comando

```
npm run dev
```

## Componentes de React

Toda aplicación de React tiene un punto de entrada, por lo generar es el archivo Main, o en su defecto un componente con el nombre de la aplicación ShoesApp.jsx

Por buenas prácticas, se recomienda usar extensión de archivos jsx si contienen un componente que retorna una vista JSX, y .js para archivos que contienen 100% lógica

#### Imprimir expresiones de JS en una vista

Las llaves simples dentro de JSX, nos permiten renderizar contenido de JS en nuestras vistas, solo es posible renderizar expresiones o sentencias que no involucren objetos literales.

Si deseamos imprimir un objeto tal cual, es necesario parsearlo con JSON.stringify() para convertirlo a una cadena de texto, o en su defecto, como generalmente se hace, acceder directamente a alguna de sus propiedades.
```
<p>{ 3 + 1}</p>
```