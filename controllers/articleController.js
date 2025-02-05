//import connection db
const { log } = require('node:console');
const connection = require('../data/db')


const index = (req, res) => {
  const sql = 'SELECT * FROM posts';

  //query al db
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Query al database fallita' })

    res.json(results);
  })
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
  const sql = ' DELETE FROM posts WHERE id = ?';

  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: 'Eliminazione articolo fallita' })
    res.sendStatus(204);
  })
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}