const express = require('express')
const override = require('method-override')
const clienteController = require('../controllers/clienteController')

const router = express.Router()
router.use(override('_method'))
router.post('/novoCliente',clienteController.novoCliente)
router.get('/listarClientes', clienteController.listarClientes)
router.get('/buscarCliente/:cpf', clienteController.buscarCliente)
router.get('/buscarCliente/:', clienteController.buscarClienteCpf)
router.delete('/deletarCliente/:cpf', clienteController.deletarCliente)
router.put('/editarCliente/:cpf', clienteController.editarCliente)
router.get('/editarCliente/:cpf',clienteController.formEditarCliente)
router.get('/cadastroCliente', clienteController.formCadastro)

module.exports = router
