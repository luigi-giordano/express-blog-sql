//import connection db
const connection = require('../data/db')



const index = (req, res) => {
  res.send('Server Articoli')
}

const show = (req, res) => {

  const id = req.params.id
  res.send(`Dettaglio Articolo ${id}`)
}

const store = (req, res) => {
  res.send('Creazione Articolo')
}

const update = (req, res) => {

  const id = req.params.id
  res.send(`Modifica Articolo ${id}`)
}

const modify = (req, res) => {

  const id = req.params.id
  res.send(`Modifica parziale Articolo ${id}`)
}

const destroy = (req, res) => {

  const id = req.params.id
  res.send(`Eliminazione Articolo ${id}`)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}