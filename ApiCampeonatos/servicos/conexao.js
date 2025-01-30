import  mysql  from "mysql2/promise";
const pool = mysql2.createPool({
    host:'localhost',
    user: 'Libertadores',
    password:'liberta123',
    database:'libertadores'
});
export default pool;