# IFMaker API

The goal of this project was to meet the needs of the Maker Lab at the Instituto Federal Farroupilha Campus in São Vicente do Sul. By developing a web API, it was designed to facilitate the management of people, users, projects, materials, and access within the lab, creating a more organized and efficient environment.

The API was structured to perform various operations efficiently. Among its functionalities are the ability to retrieve information about people, users, projects, materials, and lab access. Additionally, the API allows for the addition of new records in these contexts, the updating of existing information, and the removal of records. In this way, resource and personnel management in the lab is simplified and centralized.

To ensure the project's maintainability and scalability, I organized the repository following the principles of clean architecture. This approach offers a clear separation between the different layers of the application, facilitating modifications without compromising system stability. In the repository, models define the database tables with their respective columns and attributes. Controllers are responsible for handling HTTP requests and coordinating interactions between routes. Routes define the paths for the requests and associate them with the corresponding controllers. At the root layer, there is the main server.js file, responsible for starting the server, along with the .env file, which contains the environment variables necessary for project configuration.

## Prerequisites

Before you begin, ensure you have the following software installed:
 
 - Node.js: [Learn how to install Node.js](https://nodejs.org/).

## Application Overview

The application provides the following functionalities:

 - **Creating**: Create new records for people, users, projects, materials, loans, and access logs.
 - **Reading**: Retrieve information about people, users, projects, materials, lab access, and material loans.
 - **Updating**: Modify existing information about people, projects, users, materials, access logs, and loans.
 - **Deleting**: Remove records for people, projects, users, materials, access logs, and loans.

## Repository Structure

The repository adheres to the clean architecture principles.

 - **Models**: Defines the database tables with their columns and attributes.
 - **Controllers**: Handle HTTP requests and coordinate interactions between routes, middlewares, and domain services.
 - **Routes**: Define the API routes and map them to the corresponding controllers.

### Structure:

```bash
/config
  db.config.js

/controllers
  acesso.controller.js
  emprestimo.controller.js
  material.controller.js
  pessoa.controller.js
  projeto.controller.js
  usuario.controller.js

/models
  acesso.model.js
  emprestimo.model.js
  index.model.js
  material.model.js
  pessoa.model.js
  projeto.model.js
  usuario.model.js

/routes
  acesso.route.js
  emprestimo.route.js
  material.route.js
  pessoa.route.js
  projeto.route.js
  usuario.route.js
```

The root directory contains:

 - server.js: The main file to start the server.
 - .env: Stores environment variables.
 - Node.js configuration files.

## How to Use This Project

1. **Install dependencies**: 
```bash
npm install
```

2. **Configure environment variables**: Create a .env file at the root of the project. Add the following variables and replace the placeholders with your values:

```bash
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_DIALECT=
PORT=
ORIGIN_URL=
```

Start the server:
```bash
npm start
```

## License

This project is under MIT License - Copyright (c) 2024 Gabriel de Souza.

