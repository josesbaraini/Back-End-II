import pool from "./conexao.js";

async function executaQuery(conexao, query) {
    const resultado_query = await conexao.query(query);
    const resposta = resultado_query[0];
    return resposta;
}

export async function retornaMedicos()
{
    const conexao = await pool.getConnection();
    const query = 'SELECT medicos.id, nome, telefone, especialidades.especialidade FROM medicos INNER JOIN especialidades where medicos.especialidade = especialidades.id order by nome ASC';
    const medicos = executaQuery(conexao, query);
    conexao.release();
    return medicos;
}
export async function retornaMedicosNome(nome)
{   
    const conexao = await pool.getConnection();
    const query = `SELECT medicos.id, nome, telefone, especialidades.especialidade FROM medicos INNER JOIN especialidades where medicos.especialidade = especialidades.id and upper(nome) like '${nome.toUpperCase()}%' order by nome ASC;`;
    const medicos = executaQuery(conexao, query);
    conexao.release();
    return medicos;
}

