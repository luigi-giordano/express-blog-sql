const { log } = require('console');
const express = require('express');
const app = express();

const port = 3000;

//import middleware
const checkTime = require('./middlewares/checkTime');
const errorsHandler = require('./middlewares/errorsHandler');
const notFound = require('./middlewares/notFound');

//import router
const articlesRouter = require('./routes/articles')

//middleware checktime
app.use(checkTime);


//middleware assets static
app.use(express.static('public'));

//middleware parsing body
app.use(express.json());

//rotta 
app.get('/', (req, res) => {
  res.send('Server del Blog')
})

//rotta articoli
app.use('/articles', articlesRouter)

//middleware errorsHandler
app.use(errorsHandler);

//middleware notFound
app.use(notFound);

//ascolto porta
app.listen(port, () => {
  console.log(`Sono in ascolto alla porta ${port}`);

})