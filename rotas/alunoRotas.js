

const express = require('express');
const router = express.Router();
// Importa o controlador para que a rota saiba qual função chamar
const alunoController = require('../controllers/alunoController');

//listarAlunos
router.get('/', alunoController.listarAlunos);

//criarAluno
router.post('/', alunoController.criarAluno);

//atualizarAluno
router.put('/:id', alunoController.atualizarAluno);

//excluirAluno
router.delete('/:id', alunoController.excluirAluno);

module.exports = router;
