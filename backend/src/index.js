const express = require("express")
const app = express()
const porta = 3333 

app.listen(porta, () => console.log(`Servidor rodando na porta http://localhost:${porta}/`))