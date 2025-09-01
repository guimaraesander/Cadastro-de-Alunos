

const express = require('express');
// Importa os arquivos das rotas
const alunoRotas = require('./rotas/alunoRotas');
const professorRotas = require('./rotas/professorRotas');

const app = express();
const port = 3001; 

// Tratamento do erro
app.use(express.urlencoded({ extended: true }));


app.use(express.json());


app.use('/alunos', alunoRotas);


app.use('/professores', professorRotas);

// Inicia o servidor 
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

