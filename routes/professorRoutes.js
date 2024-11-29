const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

router.get('/', professorController.getProfessor);        
router.post('/', professorController.createProfessor);      
router.put('/:id', professorController.updateProfessor);    
router.delete('/:id', professorController.deleteProfessor); 

module.exports = router;