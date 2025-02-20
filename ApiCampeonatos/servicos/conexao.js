import  mysql  from "mysql2/promise";
const pool = mysql.createPool({
    port:3306,
    host:'localhost',
    user: 'root',
    password:'Suporte99',
    database:'libertadores'
});
export default pool;