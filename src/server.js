const express = require('express');
const cors = require('cors');
const sequelize = require('./config/config');
const Router = require('./router/router.js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(Router);

sequelize.sync().then(() => {
  console.log('Modelos sincronizados com o banco de dados.');
}).catch(err => console.error('Erro ao sincronizar com o banco:', err));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});