const mysql      = require('mysql2');
const connection = mysql.createConnection({
  host     : 'ls-19c3188d9fe0a3bf48da272b8cdee2e584f25dd1.ctyw9cim5urm.us-east-1.rds.amazonaws.com',
  port     : 3306,
  user     : 'dbmasteruser',
  password : 'e?Gy%&Qz__`4suo+)TF8(4A:!j$W;$GE',
  database : 'webApi'
});

module.exports = { connection };