const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 4000

// Inicializations
require('path');
require('./src/database/conect');
require('./src/database/sync');
require('./src/database/associations');

//CORS
app.use( cors() )
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


// Middlewares
app.use(express.json());
app.use(morgan('dev'))
app.use(express.static('public'))



//Routes
const EmployeeRoute = require('./src/routes/employees');
const SchoolRoute = require('./src/routes/schools');
const UsersRoute = require('./src/routes/user')

//Endopoints
app.use('/employees', EmployeeRoute);
app.use('/schools', SchoolRoute);
app.use('/', UsersRoute);



// Escuchar peticiones
app.listen(PORT, ()=> console.log(`Servidor en puerto ${ PORT }`))