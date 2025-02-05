const { log } = require('console');
const express = require('express');
const app = express();

const port = 3000;


//middleware assets static
app.use(express.static('public'));

//middleware parsing body
app.use(express.json());

//rotta 
app.get('/', (req, res) => {
  res.send('Server del Blog')
})

//ascolto porta
app.listen(port, () => {
  console.log('Sono in ascolto alla porta 3000');

})