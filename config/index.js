const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('../config/db');

import alunosRoutes from '../routes/alunoRoutes'
import cursoRoutes from '../routes/cursoRoutes'
import disciplinaRoutes from '../routes/disciplinaRoutes'
import professorRoutes from '../routes/professorRoutes'
import TurmaRoutes from '../routes/TurmaRoutes'

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/alunos', require('../routes/alunoRoutes'));
app.use('/api/curso', require('../routes/cursoRoutes'));
app.use('/api/disciplina', require('../routes/disciplinaRoutes'));
app.use('/api/professor', require('../routes/professorRoutes'));
app.use('/api/turma', require('../routes/TurmaRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
