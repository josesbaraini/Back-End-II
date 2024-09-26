const express = require('express');
const colecaoUf = require('./dados/dados.js');

const app = express();

app.get('/ufs', (req , res)=>{

    res.json(colecaoUf.colecaoUf);
});

app.get('/ufs/:iduf', (req , res)=>{
    const idUF = parseInt(req.params.iduf);
    let uf ;
    let mensagen_de_erro = ""

    if (!isNaN(idUF)) {
        uf = colecaoUf.colecaoUf.find(u => u.id === idUF);
        if (!uf) {
            mensagen_de_erro = 'UF não encontrada';
        }
        
    } else {
        mensagen_de_erro = 'requisisão invalida';
    }

    if (uf) {
        res.json(uf);
        
    } else {
        res.status(404).json('eres peba'+mensagen_de_erro);
        
    }
    
});

app.listen(8080,()=>{
    console.log('servidor iniciado na porta 8080');
});