const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'movie'
})

connection.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Connection Established.')
  }
})

module.exports = connection