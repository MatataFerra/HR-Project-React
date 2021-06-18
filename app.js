const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express()
const PORT = process.env.PORT || 4000

// Inicializations
require('path');
require('./src/database/conect');
require('dotenv').config();
require('./src/database/sync');
require('./src/database/associations');



// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public/'))

//CORS
app.use( cors() )

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