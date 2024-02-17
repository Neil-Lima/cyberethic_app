const nodemailer = require('nodemailer');

// Configuração do transporte de e-mail
const transporter = nodemailer.createTransport({
  host: 'smtp.live.com', // Servidor SMTP da Hotmail (Outlook)
  port: 587, // Porta de conexão SMTP
  secure: false, // true para TLS; false para STARTTLS
  auth: {
    user: 'neil.033@hotmail.com', // Insira seu e-mail da Hotmail aqui
    pass: 'bolsonaro2018' // Insira sua senha aqui
  }
});

module.exports = transporter;
