const mysql = require('mysql')

// Connect to DB data
const connection = mysql.createPool({
  host: 'us-cdbr-east-04.cleardb.com',
  user: 'b9c7a14a19a559',
  password: '4878bc24',
  database: 'heroku_e80dce80cfe2935'
})

connection.getConnection((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Connection Established.')
  }
})

module.exports = connection