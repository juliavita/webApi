const express = require('express');
const { connection } = require('./connection');
const app = express();
const port = 3000; 

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

app.get('/clientes', (req, res) => {
    connection.query('SELECT * FROM clientes', (error, results, fields) => {
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
});


app.listen(port);
console.log('API funcionando!');