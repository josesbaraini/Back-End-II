import express from 'express';
import  retornaCampeonatos  from './servicos/retornaCampeonatos_servico.js';

const app = express();

app.get('/campeonatos', async (req, res) => {
    const campeonatos = await retornaCampeonatos(); res.json(campeonatos);
})

app.listen(9000, () => {

    const data = new Date();
    console.log("Servidor node iniciado em: " + data);

})


