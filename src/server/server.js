const express = require('express');
const bodyParser = require('body-parser');
const { enviarEmail } = require('./controllers/emailController');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Rota para enviar e-mail
app.post('/enviar-email', enviarEmail);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
