const mongoose = require('mongoose')

const JogadorEsquema = new mongoose.Schema({
    Informações: {
        nome: {
            type: String,
            required: true,
        },
        apelido: {
            type: String,
            required: true,
        },
        local: {
            type: String,
            required: true,
        },
        data_nascimento: {
            type: Date,
            required: true,
        },
        clube: {
            type: String,
            required: true,
        },
        posição: {
            type: String,
            required: true,
        }
    },
    numeros: {
        partidas: {
            type: String,
            require: true,
        },
        minutos: {
            type: String,
            require: true,
        },
        gols: {
            type: String,
            require: true,
        },
        assistencias: {
            type: String,
            require: true,
        },
        cartões_amarelos: {
            type: String,
            require: true,
        },
        cartões_vermelhos: {
            type: String,
            require: true,
        },
        faltas_cometidas: {
            type: String,
            require: true,
        },
        faltas_sofridas: {
            type: String,
            require: true,
        }
    }
})

module.exports = mongoose.model('Jogador', JogadorEsquema)