const express = require("express")
const cors = request('cors')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

module.exports = app