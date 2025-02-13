import mysql from 'mysql2/promise';
import 'dotenv/config';

const pool = mysql.createPool({
    port: process.env.PORT_BD,
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
});

export default pool;