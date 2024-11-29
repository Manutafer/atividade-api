const Aluno = require('../models/Aluno');

exports.getAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find();
    res.status(200).json(alunos);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao listar alunos', error: err.message });
  }
};

exports.createAluno = async (req, res) => {
  const aluno = new Aluno({
    nome: req.body.nome,
    idade: req.body.idade,
    turma: req.body.turma,
  });

  try {
    const novoAluno = await aluno.save();
    res.status(201).json(novoAluno);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar aluno', error: err.message });
  }
};

exports.updateAluno = async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }

    aluno.nome = req.body.nome || aluno.nome;
    aluno.idade = req.body.idade || aluno.idade;
    aluno.turma = req.body.turma || aluno.turma;

    const alunoAtualizado = await aluno.save();
    res.status(200).json(alunoAtualizado);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao atualizar aluno', error: err.message });
  }
};

exports.deleteAluno = async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }

    await aluno.remove();
    res.status(200).json({ message: 'Aluno removido com sucesso' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao remover aluno', error: err.message });
  }
};
