const express = require('express');
const router = express.Router();

router.post('/newlatters/inserir', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE INSERÇÃO!');

})

router.get('/newlatters/selecionar', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE SELEÇÃO!');

})

router.put('/newlatters/alterar', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE ALTERAÇÃO!');

})

router.delete('/newlatters/excluir', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE DELETE!');

})
