const express = require('express')

const projetoController = require('./controllers/projetoController')
const participanteController = require('./controllers/participanteController')
const professorController = require('./controllers/professorController')
const turmaController = require('./controllers/turmaController')
const frequenciaController = require('./controllers/frequenciaController')

const routes = express.Router()

routes.get('/projetos', projetoController.index)
routes.post('/login/projetos', projetoController.getLogin)
routes.post('/projetos', projetoController.create)

routes.get('/participantes/:id_projeto', participanteController.index)
routes.get('/participante/:id_user', participanteController.getById)
routes.post('/participantes', participanteController.create)
routes.put('/edit/participante/:id', participanteController.editParticipante)
routes.get('/faixas/:id_projeto/:faixa', participanteController.getByFaixa)

routes.get('/professores/:id_projeto', professorController.index)
routes.get('/professor/:id_professor', professorController.getById)   
routes.post('/professores', professorController.create)   
routes.put('/edit/professor/:id_professor', professorController.editProfessor)
routes.get('/coordenador/:id_projeto', professorController.getCoordenador)
routes.post('/professor/login', professorController.getLogin)

routes.get('/total/participantes/:id_projeto', participanteController.getTotal)
routes.get('/total/turmas/:id_projeto', turmaController.getTotalTurmas)


routes.get('/turmas/:id_projeto', turmaController.index)
routes.post('/turmas', turmaController.createTurma)
routes.get('/tarde/:nome_turma', turmaController.getCountTarde)
routes.get('/manha/:nome_turma', turmaController.getCountManha)
routes.get('/professor/turmas/:id_professor/:id_projeto', turmaController.getTurmaByProfessor)
routes.get('/turma/:id_projeto/:nome_turma/:turno_turma', turmaController.getTurmaByNameTurno)
routes.get('/turma/sementinha/:id_projeto/:nome_turma/:turno_turma', turmaController.getTurmaByNameSementinha)


routes.get('/turma/:id_projeto/:nome_turma', turmaController.getTurmaByNameAll)
routes.get('/participantes/:id_projeto/:nome_turma/:faixa', turmaController.getParticipanteSemTurma)
routes.post('/add/turma', turmaController.adicionaParticipanteSemTurma)
routes.delete('/delete/:id_participante/:id_projeto/:nome_turma', turmaController.deleteParticipantesdaTurma)
routes.put('/edit/turno', turmaController.alterTurno)
routes.put('/edit/turma', turmaController.alterTurma)


routes.get('/geral/frequencia/dias/:id_projeto/:nome_turma/:mes_turma/:ano_turma', frequenciaController.getFrequenciaGeralDias)
routes.get('/geral/frequencia/dias/:id_projeto/:nome_turma/:mes_turma/:ano_turma/:turno_turma', frequenciaController.getFrequenciaGeralDiasTurno)
routes.get('/geral/frequencia/:id_projeto/:nome_turma/:mes_turma/:ano_turma', frequenciaController.getFrequenciaGeral)
routes.get('/geral/frequencia/:id_projeto/:nome_turma/:mes_turma/:ano_turma/:turno_turma', frequenciaController.getFrequenciaGeralTurnos)
// routes.get('/get/faltas/:id_projeto', frequenciaController.getFaltasDeAlunos)
routes.get('/get/frequencia/:id_projeto/:nome_turma/:turno_turma/:mes_turma/:ano_turma', frequenciaController.getFrequenciaPorMesEAno)
routes.get('/get/frequencia/:id_projeto/:nome_turma/:turno_turma/:mes_turma/:ano_turma/:dia_turma', frequenciaController.getFrequenciaPorDia)
routes.get('/get/frequencia-aluno/:id_participante/:mes_turma/:ano_turma', frequenciaController.getFrequenciaPorAluno)
routes.post('/create/frequencia/sementinha', frequenciaController.createFrequenciaSementinha)
routes.get('/get/frequencia/:id_projeto/:nome_turma/:turno_turma', frequenciaController.index)
routes.get('/get/geral/:id_projeto/:mes_turma/:ano_turma', frequenciaController.geral)
routes.post('/create/frequencia', frequenciaController.createFrequencia)
routes.put('/edit/frequencia', frequenciaController.editFrequencia)

module.exports = routes;