import mysql from 'mysql2/promise';
import 'dotenv/config';

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'Suporte99',
    database : 'usuarios'
});

export default pool;