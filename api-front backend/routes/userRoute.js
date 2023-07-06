const express = require ('express')
const router = express.Router();
const {check} = require('express-validator')
const {validarCampos} = require('./../middlewares/validarCampos')
const userControllers = require ('./../controllers/userControllers')

router.get('/', userControllers.getUsers);

router.post('/',
    [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('contraseña', "La contraseña es obligatoria").not().isEmpty(),
    validarCampos
    ]
    ,
    userControllers.addUser
)

module.exports = router;