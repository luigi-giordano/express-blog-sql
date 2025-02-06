//import connection db

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
  const sql = 'SELECT * FROM posts WHERE id = ?'

  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Query al database fallita' })
    if (results.lenght === 0) return res.status(404).json({ error: 'Post non trovato' })
    console.log(results);


    const post = results[0];

    res.json(post);
  })

}

const store = (req, res) => {
  res.send('Creazione Post')
}

const update = (req, res) => {

  const id = req.params.id
  res.send(`Modifica post numero ${id}`)
}

const modify = (req, res) => {

  const id = req.params.id
  res.send(`Modifica parziale Post numero ${id}`)
}

const destroy = (req, res) => {

  const id = req.params.id
  const sql = ' DELETE FROM posts WHERE id = ?';

  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: 'Eliminazione Post fallita' })
    res.status(200).json({ message: 'Post eliminato con successo' });
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