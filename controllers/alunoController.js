

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET - Listar todos os alunos
exports.listarAlunos = async (req, res) => {
  try {
    const alunos = await prisma.aluno.findMany();
    res.json(alunos);
  } catch (error) {
    res.status(500).send("Erro ao listar os alunos.");
  }
};

// POST - Cadastrar um novo aluno
exports.criarAluno = async (req, res) => {
  const { nome, email, idade } = req.body;
  if (!nome || !email || !idade) {
    return res.status(400).send('Nome, email e idade são obrigatórios.');
  }

  try {
    const novoAluno = await prisma.aluno.create({
      data: {
        nome,
        email,
        idade: parseInt(idade)
      }
    });
    res.status(201).json(novoAluno);
  } catch (error) {
    res.status(500).send('Erro ao cadastrar aluno. Verifique se o e-mail já existe.');
  }
};

// PUT - Atualizar nome e e-mail de um aluno
exports.atualizarAluno = async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;

    try {
        const alunoAtualizado = await prisma.aluno.update({
            where: { id: parseInt(id) },
            data: { nome, email },
        });
        res.json(alunoAtualizado);
    } catch (error) {
        // Erro "registro não encontrado"
        if (error.code === 'P2025') {
            return res.status(404).send('Aluno não encontrado.');
        }
        res.status(500).send('Erro ao atualizar o aluno.');
    }
};

// DELETE - Excluir um aluno
exports.excluirAluno = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.aluno.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send(); 
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).send('Aluno não encontrado.');
        }
        res.status(500).send('Erro ao excluir o aluno.');
    }
};

