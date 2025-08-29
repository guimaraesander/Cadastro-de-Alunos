// rotas/professorRotas.js

const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

// Mapeia as rotas para as funções do controlador de professores
router.get('/', professorController.listarProfessores);
router.post('/', professorController.criarProfessor);
router.put('/:id', professorController.atualizarProfessor);
router.delete('/:id', professorController.excluirProfessor);

module.exports = router;
