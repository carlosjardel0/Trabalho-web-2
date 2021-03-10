const express = require('express')
const routes = express.Router()

const JogadorController = require("./controller/JogadorController")

routes.get("/jogadores", JogadorController.index)
routes.post("/jogadores", JogadorController.store)
routes.get("/jogadores/:id", JogadorController.show)
routes.put("/jogadores/:id", JogadorController.update)
routes.delete("/jogadores/:id", JogadorController.destroy)

module.exports = routes