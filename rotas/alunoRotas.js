// rotas/alunoRotas.js

const express = require('express');
const router = express.Router();
// Importa o controlador para que a rota saiba qual função chamar
const alunoController = require('../controllers/alunoController');

// Mapeia a rota GET / para a função listarAlunos
router.get('/', alunoController.listarAlunos);

// Mapeia a rota POST / para a função criarAluno
router.post('/', alunoController.criarAluno);

// Mapeia a rota PUT /:id para a função atualizarAluno
router.put('/:id', alunoController.atualizarAluno);

// Mapeia a rota DELETE /:id para a função excluirAluno
router.delete('/:id', alunoController.excluirAluno);

module.exports = router;
