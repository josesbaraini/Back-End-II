import express from 'express';
import { retornaMedicos, retornaMedicosNome, retornaMedicosEspecialidade} from './servico/retornaMedico_servico.js';
const app = express();

app.get('/medicos', async (req, res) => {
    let medicos;
    const nome = req.query.nome;
    const especialidade = req.query.especialidade;
    
    if (typeof nome === 'undefined' && typeof especialidade === 'undefined') {
        medicos = await  retornaMedicos()}
    else if(typeof especialidade === 'undefined'){
        console.log(nome)
        medicos = await retornaMedicosNome(nome)
    }
    else if(typeof nome === 'undefined'){
        medicos = await retornaMedicosEspecialidade(especialidade)

    }
    if (medicos.length > 0) {
        res.json(medicos);
        
    }else {
        res.status(404).json({ mensagem: "Nenhum Médico Encontrado" });
    }
   

})


app.listen(9000, () => {

    const data = new Date();
    console.log("Servidor node iniciado em: " + data);
    

})



