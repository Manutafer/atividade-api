const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

// Rotas de Aluno
router.get('/', alunoController.getAlunos);        
router.post('/', alunoController.createAluno);      
router.put('/:id', alunoController.updateAluno);    
router.delete('/:id', alunoController.deleteAluno); 

module.exports = router;
