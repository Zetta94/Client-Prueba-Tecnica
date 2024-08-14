# Prueba Técnica 

## Tabla de Contenidos

- [Descripción](#descripción)
  - [Funcionalidades](#funcionalidades)
- [Deploy](#deploy)
- [Instalación y Ejecución](#instalación-y-ejecución)
  - [Backend](#backend)
  - [Frontend](#frontend)

## Descripción

Este proyecto es una aplicación web desarrollada en **TypeScript** utilizando **React** para el frontend y **Express** con **MongoDB** para el backend. La aplicación permite realizar operaciones CRUD sobre una entidad principal, basada en datos consumidos desde una API gratuita y almacenados en MongoDB. 

### Funcionalidades

- **CRUD Completo:** Permite crear, leer, actualizar y eliminar datos.
- **Interfaz de Usuario:** Desarrollo con React,Typescript y tailwin proporcionando una experiencia de usuario interactiva.
- **Paginación:** Implementada en el backend y en el frontend para manejar grandes volúmenes de datos.
- **API de Datos:** Consumo de datos desde una API gratuita y almacenamiento en MongoDB.

## Deploy

- ** Backend : https://api-prueba-tecnica.onrender.com/
- ** Frontend : https://client-prueba-tecnica-579mfy2vj-manuels-projects-5a3093b2.vercel.app/

## Instalación y Ejecución

### Backend

1. **Clona el repositorio**

   ```bash
   git clone (https://github.com/Zetta94/API-Prueba-Tecnica.git)

2. **Instala las dependencias necesarias**
   
   ```bash
   npm install
   
3. **Crea una cuenta en Themoviedb**
    
    
   
4. **Crea un archivo .env en la raíz del directorio y configura las siguientes variables de entorno**
   
   ```bash
   ##CONECTION
   PORT=<puerto-para-ejecutar-backend>
   MONGODB_URL=<tu-url-de-mongodb>
   ##LOGIN
   SECRET_KEY=<key-secreta>
   ##API
   API_URL= https://api.themoviedb.org/3
   API_KEY= <api-key-brindada-por-https://api.themoviedb.org/3>
   API_TOKEN= <token-brindado-por-https://api.themoviedb.org/3>
   
5. **Inicia el servidor**
   
   ```bash
   npm run dev
   
6. **Puedes revisar la documentación de la API ingresando en el siguiente endpoint (Reemplaza PORT por el puerto confirado en .env)** 
   ```bash
   localhost:<PORT>/apidocs 
   
8. **Pruebas**
 
   **Puedes realizar pruebas utilizando <u>Postman</u> para comprobar el funcionamiento de los distintos endpoints**
    
### Frontend

1.****
   
