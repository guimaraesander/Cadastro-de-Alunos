

const express = require('express');
// Importa os arquivos de rotas que criamos
const alunoRotas = require('./rotas/alunoRotas');
const professorRotas = require('./rotas/professorRotas');

const app = express();
const port = 3001; // Mantendo sua porta original

// Middleware para que o Express entenda dados de formulário (x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Middleware para que o Express entenda JSON. É uma boa prática ter ambos.
app.use(express.json());

// Diz ao aplicativo para usar o arquivo de rotas de alunos
// para qualquer endereço que comece com /alunos
app.use('/alunos', alunoRotas);

// Diz ao aplicativo para usar o arquivo de rotas de professores
// para qualquer endereço que comece com /professores
app.use('/professores', professorRotas);

// Inicia o servidor e o faz "escutar" por requisições na porta definida
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

