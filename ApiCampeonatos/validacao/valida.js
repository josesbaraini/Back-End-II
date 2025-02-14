
export function validaQuery(resultado,res) {
    if (resultado.affectedRows >0) {
        return res.status(202).send('Registro atuzalizado com sucesso');
    } else {
        return res.status(404).send('Registro Não encontrado');
        
    }
    
}

