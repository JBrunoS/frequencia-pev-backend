const connection = require('../database/connection')

module.exports = {
    async index(req, res) {
        const { id_projeto } = req.params

        const participantes = await connection('participantes')
            .select('*')
            .where({
                'id_projeto': id_projeto,
            })
            .orderBy([{column: 'faixa', order: 'asc'}, {column: 'nome', order: 'asc'}])

        return res.json(participantes)
    }, 

    async getTotal(req, res){
        const { id_projeto } = req.params

        const participantes = await connection('participantes')
            .count('id_projeto')
            .where({
                'id_projeto': id_projeto,
            })

        return res.json(participantes)
    },

    async getById(req, res){
        const { id_user } =req.params;

        const user = await connection('participantes')
        .select('*')
        .where({
            'id': id_user 
        })
        .first();

        return res.json(user)
    },
    
    async create(req, res) {

        const {
            br,
            nome,
            dia_nascimento,
            mes_nascimento,
            ano_nascimento,
            faixa,
            id_projeto } = req.body


        const participante = await connection('participantes')
            .select('*')
            .where({
                'br': br
            })
            .first();

        if (participante) {
            return res.json("Participante já cadastrado no sistema")
        } else {
            const novo = await connection('participantes')
                .insert({
                    br,
                    nome,
                    dia_nascimento,
                    mes_nascimento,
                    ano_nascimento,
                    status: true,
                    faixa,
                    id_projeto
                })
                .returning('br')

                return res.json(novo)
        }
    },

    async getByFaixa(req, res){
        const { faixa, id_projeto } = req.params;


        const participantes = await connection('participantes')
        .select('*')
        .where({
            'faixa': faixa,
            'id_projeto': id_projeto
        })
        .orderBy('nome', 'asc')

        return res.json(participantes)
    },

    async editParticipante(req, res){
        const { id } = req.params;
        const {
            br,
            nome,
            dia_nascimento,
            mes_nascimento,
            ano_nascimento,
            status,
            faixa,
            id_projeto } = req.body

        await connection('participantes')
        .where({'id': id})
        .update({
            'br': br,
            'nome': nome,
            'dia_nascimento': dia_nascimento,
            'mes_nascimento': mes_nascimento,
            'ano_nascimento': ano_nascimento,
            'status': status,
            'faixa': faixa,
            'id_projeto': id_projeto
        })

        return res.json('Dados alterados com sucesso!')
    }
}