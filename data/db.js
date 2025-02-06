const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'articles'
});

connection.connect((err) => {
  //in caso di errore lo espongo
  if (err) throw err;
  //se non ci sono errori mostra la connessione
  console.log('MySql Connesso');
})

module.exports = connection;