# :zap: Node Sequelize PostgreSQL

* Node.js + Express used with Sequelize to perform Create, Read, Update & Delete (CRUD) operations on linked data tables in a PostgreSQL database
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/node-sequelize-postgresql?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/node-sequelize-postgresql?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/node-sequelize-postgresql?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/node-sequelize-postgresql?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Node Sequelize PostgreSQL](#zap-node-sequelize-postgresql)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:wrench: Testing](#wrench-testing)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* SQL database data based on Sequelize Project and Workpackage models
* Node.js project structure best practise observed with separate routes & controller code
* The use of Projects and Workpackages is based on my Engineering experience in Norway where all Maintenance and Modifications are explained in engineering workpackages that all have a unique workpackage id number and are tied to a project using the project id number

* Database Overview:

![Overview](./imgs/database_overview.png)

## :camera: Screenshots

![Image](./imgs/node.png)

## :signal_strength: Technologies

* [Node.js v16](https://nodejs.org/) Javascript runtime using the [Chrome V8 engine](https://v8.dev/)
* [Express v4](https://www.npmjs.com/package/express) web framework for node
* [Sequelize v6](https://sequelize.org/) TypeScript and Node.js Object-relational mapping (ORM) for Postgres
* [Thunder Client](https://www.thunderclient.com/) lightweight REST Client used to test CRUD operations
* [DBeaver relational database tool](https://dbeaver.com/) used to connect to a PostgreSQL database
* [DB Diagram](https://dbdiagram.io/) used to create the database overview drawing

## :floppy_disk: Setup

* Assuming you have PostgreSQL database installed, install DBeaver and connect to your PostgreSQL database using DBeaver
* `npm i` to install dependencies
* Create `.env` and add database credentials - see `.env.example`
* `npm run dev` runs app in the development mode with auto-restart.
* Open [http://localhost:3000/projects](http://localhost:3000/projects) to see projects list in browser
* Open [http://localhost:3000/workpackages](http://localhost:3000/workpackages) to see workpackages list in browser
* CRUD operations can be performed using Thunder Client

## :wrench: Testing

* tba

## :computer: Code Examples

* Sequelize model using Sequalize.define

```typescript
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
```

## :cool: Features

* tba

## :clipboard: Status & To-Do List

* Status: Working
* To-Do: Fix link between Projects and Workpackages

## :clap: Inspiration

* [Sequelize documentation: Model Basics](https://sequelize.org/docs/v6/core-concepts/model-basics/)
* [Sequelize documentation: Model Querying finders](https://sequelize.org/docs/v6/core-concepts/model-querying-finders/)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
