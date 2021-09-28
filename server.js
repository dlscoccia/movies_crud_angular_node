require('./config/connection')
const express = require('express')
const port = (process.env.port || 5000)

// express instance
const app = express()
app.use(express.json())
// port config
app.set('port', port)

// routes
app.use('/api',require('./routes'))

// express init
app.listen(app.get('port'), (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`Server running on port: ${port}`)
  }
})