const express = require ('express')
const router = express.Router();
const {check} = require('express-validator')
const {validarCampos} = require('./../middlewares/validarCampos')
const profesoresController = require ('./../controllers/profesoresController')

router.get('/', profesoresController.getProfesores);
router.get('/:id', profesoresController.getProfesoresById)
//router.post('/', profesoresController.addProfesor);
//router.put('/:id', profesoresController.updateProfesor)
router.put('/:id', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('especialidad', "La especialidad es obligatoria").not().isEmpty(),
    check('email', 'El email es invalido').isEmail(),
    validarCampos
    ]
    ,
    profesoresController.updateProfesor)
router.delete('/:id',profesoresController.deleteProfesorById)
router.post('/',
    [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('especialidad', "La especialidad es obligatoria").not().isEmpty(),
    check('email', 'El email es invalido').isEmail(),
    validarCampos
    ]
    ,
    profesoresController.addProfesor
)

module.exports = router;

    

    
