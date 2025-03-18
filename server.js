//Configurar nosso back end
const express = require ('express')

const app = express()

// Rota para front end
app.use(express.static('public'))

//Iniciar com localhost: 3000
app.listen(3000, () => {
    console.log(`Servidor rodando, acesse link http://localhost:3000`)

})