const express = require ('express')
const {check} = require('express-validator')
const {validarCampos} = require('./../middlewares/validarCampos')
const router = express.Router();
const cursosController = require ('./../controllers/cursosControllers')

// definimos las rutas y derivamos al controlador correspondiente. Una interfaz que dice donde se manejan estas cosas

// le decimos cual se encarga de resolver el GET

router.get('/', cursosController.getCursos);
router.get('/:id', cursosController.getCursosById);
//router.post('/', cursosController.addCurso);
//router.put('/:id', cursosController.updateCurso);
router.put('/:id', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', "La descripcion es obligatoria").not().isEmpty(),
    validarCampos
    ]
    ,
    cursosController.updateCurso);
router.delete('/:id',cursosController.deleteCursoById);
router.get('/:id/estudiantes',cursosController.getEstudiantesDelCurso)
router.post('/:id/estudiantes', cursosController.addEstudianteAUnCurso);
router.delete('/:id/estudiantes', cursosController.deleteEstudianteAUnCurso);
router.post('/',
    [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', "La descripcion es obligatoria").not().isEmpty(),
    validarCampos
    ]
    ,
    cursosController.addCursos
)

module.exports = router;
    