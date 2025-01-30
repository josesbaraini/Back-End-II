import express  from "express";
import  {buscarUfPorID, buscarUfs, buscarUfsPorNome } from "./sevicos/servico.js";

const app = express();



app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();
    if (resultado.length > 0) {
        res.json(resultado);
        
    } else {
        res.status(404).send({ "erro": "Nenhuma UF encontrada" });
    };
});

app.get('/ufs/:iduf', (req, res) => {
    const UF = buscarUfPorID(req.params.iduf);

    if (UF) {
        res.json(UF);
    } else if (isNaN(parseInt(req.params.iduf))){
        res.status(400).send({"erro":"requisição Invalida"});

    } else{
        res.status(404).send({"erro":"UF não encontrada"});
    }
});
  

   
app.listen(8080, () => {
    console.log('servidor iniciado na porta 8080');
});