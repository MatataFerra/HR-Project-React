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


// Middlewares
app.use(morgan('dev'))
app.use(express.json());
app.use(express.static('public'))



//Routes
const EmployeeRoute = require('./src/routes/employees');
const SchoolRoute = require('./src/routes/schools');
const UsersRoute = require('./src/routes/user')

//Endopoints
app.use('/api/employees', EmployeeRoute);
app.use('/api/schools', SchoolRoute);
app.use('/api', UsersRoute);



// Escuchar peticiones
app.listen(PORT, ()=> console.log(`Servidor en puerto ${ PORT }`))