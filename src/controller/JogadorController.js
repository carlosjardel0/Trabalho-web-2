const mongoose = require('mongoose');

const { update } = require('../models/Jogador');

const Jogador = mongoose.model('Jogador')

module.exports = {
    async index(req, res) {
        const jogadores = await Jogador.find();

        return res.json(jogadores)
    },

    async store(req, res) {
        const jogadores = await Jogador.create(req.body)

        return res.json(jogadores)
    },

    async show(req, res) {
        const jogadores = await Jogador.findById(req.params.id)

        return res.json(jogadores)
    },

    async update(req, res) {
        const jogadores = await Jogador.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

        return res.json(jogadores)
    },

    async destroy(req, res) {
        const jogadores = await Jogador.findByIdAndRemove(req.params.id)

        return res.send()
    }
}