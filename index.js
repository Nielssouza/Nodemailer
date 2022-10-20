const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: 'danielvm21@outlook.com.br',
        pass: 'Danielsouza1994',
    }
});

transport.sendMail({
    from:'danielvm21@outlook.com.br',
    to: 'souzadaniel187@gmail.com',
    subject:'Enviado com nodemailer',
    html:'<h1> Olá Dev</h1> <p> Esse email foi enviado com nodemailer</p>',
    text:'Olá, Dev! esse email foi enviado com nodemailer',
})
.then(() => console.log('Email enviado com sucesso!'))
.catch((err) => console.log('Erro ao enviar email:', err));