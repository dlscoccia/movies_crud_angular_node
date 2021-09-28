const routes = require('express').Router()
const connection = require('./config/connection')

// Routes declarations
// GET ALL
routes.get('/', (req, res) => {
  const query = 'SELECT * FROM movie'
  connection.query(query, (err, rows, fields) => {
    if (err) {
      throw err;
    } else {
      res.json(rows)
    }
  })
})
 
// GET SPECIFIC ID
routes.get('/:id', (req, res) => {
  const {
    id
  } = req.params
  const query = `SELECT * FROM movie WHERE mov_id=${id}`
  connection.query(query, [id], (err, rows, fields) => {
    if (err) {
      throw err;
    } else {
      res.json(rows)
    }
  })
})

// POST 
routes.post('/', (req, res) => {
  const {
    mov_title,
    mov_year,
    mov_time,
    mov_lang,
    mov_dt_rel,
    mov_rel_country
  } = req.body

  let query = `INSERT INTO movie(mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country) VALUES (
          '${mov_title}', 
          '${mov_year}', 
          '${mov_time}', 
          '${mov_lang}', 
          '${mov_dt_rel}', 
          '${mov_rel_country}')`

  connection.query(query, (err, rows, fields) => {
    if (err) {
      throw err;
    } else {
      res.json({
        'status': 'Added'
      })
    }
  })
})

// DELETE
routes.delete('/:id', (req, res) => {

  const {
    id
  } = req.params
  let query = `DELETE FROM movie WHERE mov_id='${id}'`
  connection.query(query, (err, rows, fields) => {
    if (err) {
      throw err;
    } else {
      res.json({
        'status': 'Deleted'
      })
    }
  })
})
module.exports = routes

// UPDATE
routes.put('/:id', (req, res) => {
  const {
    mov_id,
    mov_title,
    mov_year,
    mov_time,
    mov_lang,
    mov_dt_rel,
    mov_rel_country
  } = req.body

  const {
    id
  } = req.params

  const query = `UPDATE movie set
  mov_title='${mov_title}', 
  mov_year='${mov_year}', 
  mov_time='${mov_time}', 
  mov_lang='${mov_lang}', 
  mov_dt_rel='${mov_dt_rel}', 
  mov_rel_country='${mov_rel_country}' WHERE mov_id='${id}'`
  
  connection.query(query, (err, rows, fields) => {
    if (err) {
      throw err;
    } else {
      res.json({
        'status': 'Updated'
      })
    }
  })
})