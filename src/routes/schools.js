const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validateJWT')

const { allSchools, oneSchool} = require('../controller/school/allSchools');
const { createSchool } = require('../controller/school/createSchool');
const { updateSchool } = require('../controller/school/updateSchool');
const deleteSchool = require('../controller/school/deleteSchool');

//Search

const schoolByDE = require('../controller/school/search/schoolFindByDE');
const schoolByCM = require('../controller/school/search/schoolFindByCM');
const schoolByAddress = require('../controller/school/search/schoolFindByAddress');
const schoolByLevel = require('../controller/school/search/schoolFindBylevel');
const schoolByFullname = require ('../controller/school/search/schoolFindByFullname')


// Middleware
router.use(validarJWT)


router.use('/all', allSchools);
router.use('/', oneSchool);
router.use('/create', createSchool);
router.use('/update', updateSchool);
router.use('/delete', deleteSchool);
router.use('/search', schoolByDE);
router.use('/search', schoolByCM);
router.use('/search', schoolByAddress);
router.use('/search', schoolByLevel);
router.use('/search', schoolByFullname)


module.exports = router