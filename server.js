const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
const port = 3000;

// Conectar ao banco de dados
connectDB();

// Middleware para aceitar JSON como entrada
app.use(express.json());

// Middleware CORS
app.use(cors());

// Rotas
app.use('/api', require('./routes/tasks'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
