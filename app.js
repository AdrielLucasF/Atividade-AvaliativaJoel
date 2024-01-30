const express = require('express')
const cors = require('cors')
const router = require('./routes/clienteRoutes')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/clientes', router)
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.render('index')
})

app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`)
})