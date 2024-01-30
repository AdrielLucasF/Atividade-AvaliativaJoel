const { response } = require('express')
const db = require('../databases/connection')

clienteControler = {

    formCadastro:(req, res)=>{
        res.render('cadastroCliente')
    },

    novoCliente:(req, res)=>{
        const {cpf, nome, email, data_nascimento, fone, sexo} = req.body 
        db.insert({cpf, nome, email, data_nascimento, fone, sexo}).table("clientes").then(data=>{
            console.log(data)
            res.json({message: 'Cliente salvo com sucesso!'})
        }).catch(error=>{
            console.log(error)
        })
    },
    listarClientes: (req, res)=>{
        db.select("*").table("clientes").then(
            cliente=>{
                console.log(cliente)
                //res.json(alunos)
                res.render('listarClientes', {clientes:cliente})
            }).catch(error=>{
                console.log(error)
            })
    },
    buscarCliente:(req, res)=>{
        const id = req.params
        console.log(id)
        db.select("*").table("clientes").where({cpf:id.cpf}).then(cliente=>{
            console.log(cliente)
            res.json(cliente)
        }).catch(error=>{
            console.log(error)
        })
    },
    buscarClienteCpf:(req, res)=>{
        const id = req.params
        console.log(id.cpf)
        db.select("*").table("clientes").where({cpf:id.cpf}).then(cliente=>{
            console.log(cliente)
            res.json(cliente)
        }).catch(error=>{
            console.log(error)
        })
    },
    deletarCliente: (req, res)=> {
        const id = req.params
        db.where({cpf: id.cpf }).del().table("clientes").then(data => {
            res.json({message:"Cliente removido"})
        }).catch(error => {
            res.json(error)
        })
    },
    editarCliente:(req, res)=>{
        const id = req.params
        const {cpf, nome, email, data_nascimento, fone, sexo} = req.body 
        db.where({cpf:id.cpf}).update({cpf, nome, email, data_nascimento, fone, sexo}).table("clientes").then(data=>{
                res.json({message: "Dados atualizados com sucesso!"})
            }).catch(error=>{
            res.json(error)
            })
    },
    formEditarCliente:(req, res)=>{
        const id = req.params
        console.log(id)
        db.select("*").table("clientes").where({cpf:id.cpf}).then(cliente=>{
            console.log(cliente)
            res.render('editarCliente',{cliente})
        }).catch(error=>{
            console.log(error)
        })
    }

}
module.exports = clienteControler