# EatDABurger
https://quiet-harbor-94306.herokuapp.com/

```
.
├── config
│   ├── connection.js (In connection.js file,setup the code to connect Node to MySQL & Export the connection.)
│   └── orm.js  (Import connection.js into orm.js)
|               (In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers.)
│               (Export the ORM object in module.exports.)
|
|
|
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql  (Wrote SQL queries)
│   └── seeds.sql   (wrote insert queries to populate the burgers table with four entries.)
│
|
|                (then Run the schema.sql and seeds.sql files into the mysql server from the command line)
|
|
├── models
│   └── burger.js  (import orm.js into burger.js)
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       |
│       |── img
│       │   └── eatdaburger.jpg
|       |
│       │         
|       |── js
│         └── index.js
│
|
|── views
|   ├── index.handlebars
|   └── layouts
|       └── main.handlebars
|
|
|
├── server.js
```


### App Setup
Create a GitHub repo called 'eatDABurger' and clone it to my computer.

Make a 'package.json' file by running 'npm init' from the command line.

Install the Express npm package: 'npm install express'.

Create a server.js file.

Install the Handlebars npm package: 'npm install express-handlebars'.

Install MySQL npm package: 'npm install mysql'.

Require the following npm packages inside of the server.js file:

*express