const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

router.get('/', cursoController.getCurso);        
router.post('/', cursoController.createCurso);      
router.put('/:id', cursoController.updateCurso);    
router.delete('/:id', cursoController.deleteCurso); 

module.exports = router;