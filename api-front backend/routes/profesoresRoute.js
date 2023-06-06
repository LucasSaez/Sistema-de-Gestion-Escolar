const express = require ('express')
const router = express.Router();
const profesoresController = require ('./../controllers/profesoresController')

router.get('/', profesoresController.getProfesores);
router.get('/:id', profesoresController.getProfesoresById);
router.post('/', profesoresController.addProfesor);
router.put('/:id', profesoresController.updateProfesor);
router.delete('/:id', profesoresController.deleteProfesorById);

module.exports = router;

    
