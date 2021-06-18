const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, validateTokenAndAuth } = require('../controller/users/auth');
const { validarCampos } = require('../middlewares/validarCampos');
const { validarJWT } = require('../middlewares/validateJWT');

const checkFieldsSingUp = [
    check('username', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es inválido').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres').isLength({min: 6}),
    validarCampos
]

const checkFieldsLogin = [
    check('email', 'El email es inválido').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres').isLength({min: 6}),
    validarCampos,
]

router.post('/singup', checkFieldsSingUp, crearUsuario);
router.post('/login', checkFieldsLogin, loginUsuario);
router.get('/token', validarJWT, validateTokenAndAuth)


module.exports = router