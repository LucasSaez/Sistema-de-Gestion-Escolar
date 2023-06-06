const express = require ('express')
const router = express.Router();
const cursosController = require ('./../controllers/cursosControllers')
// definimos las rutas y derivamos al controlador correspondiente. Una interfaz que dice donde se manejan estas cosas

// le decimos cual se encarga de resolver el GET

router.get('/', cursosController.getCursos);
router.get('/:id', cursosController.getCursosById);
router.post('/', cursosController.addCursos);
router.put('/:id', cursosController.updateCurso);
router.delete('/:id', cursosController.deleteCursoById);
router.get('/:id/estudiantes',cursosController.getEstudiantesDelCurso)


module.exports = router;