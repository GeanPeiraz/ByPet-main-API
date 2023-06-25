const express = require('express');
const router = express.Router();

router.post('/cadastros/inserir', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE INSERÇÃO!');

})

router.get('/cadastros/selecionar', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE SELEÇÃO!');

})

router.put('/cadastros/alterar', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE ALTERAÇÃO!');

})

router.delete('/cadastros/excluir', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE DELETE!');

})

module.export = router;
