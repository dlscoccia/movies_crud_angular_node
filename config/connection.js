const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'us-cdbr-east-04.cleardb.com',
  user: 'b9c7a14a19a559',
  password: '4878bc24',
  database: 'heroku_e80dce80cfe2935'
})

connection.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Connection Established.')
  }
})

module.exports = connection