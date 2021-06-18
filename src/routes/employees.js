const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validateJWT')

const { allEmployees, oneEmployee } = require('../controller/employee/allEmployees');
const { createEmployee } = require('../controller/employee/createEmployee');
const updateEmployee = require('../controller/employee/updateEmployee');
const deleteEmployee = require('../controller/employee/deleteEmployee');

//Searches

const employeeByDni = require('../controller/employee/search/employeefindByDni');
const employeeByLast = require('../controller/employee/search/employeefindByLastname');
const employeeByEmail = require('../controller/employee/search/employeefindByEmail');
const employeeByPhone = require('../controller/employee/search/employeefindByPhone');
const { allEmployeeInfo } = require('../controller/employee/search/employeeFindInformation')


// Middleware
router.use(validarJWT)

// Endopoints
router.use('/all', allEmployees);
router.use('/', oneEmployee);
router.use('/create', createEmployee);
router.use('/update', updateEmployee);
router.use('/delete', deleteEmployee);
router.use('/search', employeeByDni);
router.use('/search', employeeByLast);
router.use('/search', employeeByEmail);
router.use('/search', employeeByPhone);
router.use('/search', allEmployeeInfo);

module.exports = router