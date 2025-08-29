// controllers/professorController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET /professores: Listar todos os professores
exports.listarProfessores = async (req, res) => {
  try {
    const professores = await prisma.professor.findMany();
    res.json(professores);
  } catch (error) {
    res.status(500).send("Erro ao listar os professores.");
  }
};

// POST /professores: Cadastrar um novo professor
exports.criarProfessor = async (req, res) => {
  const { nome, email, idade } = req.body;
  if (!nome || !email || !idade) {
    return res.status(400).send('Nome, email e idade são obrigatórios.');
  }

  try {
    const novoProfessor = await prisma.professor.create({
      data: {
        nome,
        email,
        idade: parseInt(idade)
      }
    });
    res.status(201).json(novoProfessor);
  } catch (error) {
    res.status(500).send('Erro ao cadastrar professor. Verifique se o e-mail já existe.');
  }
};

// PUT /professores/:id: Atualizar um professor
exports.atualizarProfessor = async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;

    try {
        const professorAtualizado = await prisma.professor.update({
            where: { id: parseInt(id) },
            data: { nome, email },
        });
        res.json(professorAtualizado);
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).send('Professor não encontrado.');
        }
        res.status(500).send('Erro ao atualizar o professor.');
    }
};

// DELETE /professores/:id: Excluir um professor
exports.excluirProfessor = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.professor.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).send('Professor não encontrado.');
        }
        res.status(500).send('Erro ao excluir o professor.');
    }
};

