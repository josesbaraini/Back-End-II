import express from 'express';
import { retornaMedicos, retornaMedicosNome} from './servico/retornaMedico_servico.js';
const app = express();

app.get('/medicos', async (req, res) => {
    let medicos;
    const nome = req.query.nome;
    if (typeof nome === 'undefined') {
        medicos = await  retornaMedicos()}
    else{
        console.log(nome)
        medicos = retornaMedicosNome(nome)

    }
   
    
    res.json(medicos);

})


app.listen(9000, () => {

    const data = new Date();
    console.log("Servidor node iniciado em: " + data);
    

})



