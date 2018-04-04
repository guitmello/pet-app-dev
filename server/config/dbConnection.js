const {Pool} = require('pg');

const pool = new Pool({
    user: '',
    host: 'localhost',
    database: 'db_idot',
    password: '',
    port: 5432
});
/*
pool.connect();
pool.query("select * from tb_animal where cd_idade_animal = 13", (err, res) => {
    console.log(err, res);
    pool.end();
});
*/
