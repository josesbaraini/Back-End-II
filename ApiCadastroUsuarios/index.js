import express from 'express';
import cors from 'cors';
import { cadastraLead } from "./servico/cadastro_servico.js";
import { validaUsuario } from "./validacao/valida.js";

const app = express();
app.use(cors())
app.use(express.json());
app.post('/usuarios', async (req, res) => {
        const {nome,email,telefone} = req.body;

        if (validaUsuario(nome,email,telefone) === true){
            await cadastraLead(nome, email, telefone)
            res.status(204).send('Cadastro completo')

        }else{
            res.status(400).send('Dados de cadastro invalidos')

        }
        
        

})


app.listen(9001, () => {

    const data = new Date();
    console.log("Servidor node iniciado em: " + data);
    

})



