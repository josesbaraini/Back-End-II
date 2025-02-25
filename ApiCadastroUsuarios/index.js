import express from 'express';
import cors from 'cors';
import { cadastraLead } from "./servico/cadastro_servico.js";
import { validaUsuario, validaUsuario2 } from "./validacao/valida.js";

const app = express();
app.use(cors())
app.use(express.json());
app.post('/usuarios', async (req, res) => {
    const { nome, email, telefone } = req.body;

    if (validaUsuario(nome, email, telefone)) {
        await cadastraLead(nome, email, telefone);
        res.status(204).send('Cadastro completo');

    } else {
        res.status(400).send('Dados de cadastro invalidos');

    }



})

app.post('/usuarios2', async (req, res) => {
    const { nome, email, telefone } = req.body;
    const usuarioValido = validaUsuario2(nome, email, telefone)
    if (usuarioValido.status) {
        await cadastraLead(nome, email, telefone)
        res.status(204).send('Cadastro Completo')

    } else {
        res.status(400).send(usuarioValido.mensagem)
    }
})
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ mensagem: 'Erro interno no servidor', erro: err.message });
    throw new Error('teste') 
});
app.listen(9001, () => {

    const data = new Date();
    console.log("Servidor node iniciado em: " + data);


})



