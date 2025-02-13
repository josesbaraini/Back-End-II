import express from 'express';
import cors from 'cors';
import { cadastraLead } from "./servico/cadastro_servico.js";
import { validaUsuario } from "./validacao/valida.js";

const app = express();
app.use(cors())
app.use(express.json());
app.post('/usuarios', async (req, res) => {
    const nome = req.body.nome;
        const email = req.body.email;
        const telefone = req.body.telefone;
        if (validaUsuario(nome,email,telefone) === true){
            await cadastraLead(nome, email, telefone)
            res.status(204).end()

        }else{
            res.status(404).end()

        }
        
        

})


app.listen(9000, () => {

    const data = new Date();
    console.log("Servidor node iniciado em: " + data);
    

})



