# Quantum IT Innovations assessment

## how to run the project
  - clone the repo
  - cd into **frontend** folder and run **npm install** command in the terminal
  - cd into **backend** folder and run **npm install** command in the terminal
  - after installing all the dependencies, in **frontend** folder run **npm start** - this will start the **frontend development server** 
  - same goes for backend, in **backend** folder run **npm run server** - this will start the **backend development server**
  - all the **environment variables** are in **.env** file present in both frontend & backend folder, you can change this according to your needs and requirements

## envioronment variables
  + In frontend
    <br/>
    - ```REACT_APP_SERVER_BASE_API_V1```
     : this is the base url of the server, change this if your server is running on different port or if you have changed the api
  + In backend
    <br/>
    - ```PORT```
     : port on which the server is running, change this if you want to run the server on different port
    - ```CLIENT_URL```
     : this is the base url of your frontend, by default react app runs on port **3000** if initialized with **create-react-app** command, this is required for cors
    - ```JWT_SECRET```
     : a secret text required by the jwt library for encrypting the data/text
    - ```JWT_EXPIRY_TIME```
     : a jwt token expriry time
    - ```MONGO_URI```
     : a mongodb database connection string, currently set to localhost, change this uri if you want to connect it with mongodb atlas
    - ```DB_NAME```
     : a mongodb database name, **MONGO_URI** should be without database in url string as this variable is defined separatly 
