import  mysql  from "mysql2/promise";
const pool = mysql.createPool({
    port:3307,
    host:'localhost',
    user: 'libertadores',
    password:'liberta99',
    database:'libertadores'
});
export default pool;