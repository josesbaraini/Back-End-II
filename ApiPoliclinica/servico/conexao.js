import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    port: 3307,
    host     : 'localhost',
    user     : 'root',
    password : 'nãocompensa99',
    database : 'clinica'
});

export default pool;