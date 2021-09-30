require('./config/connection')
const express = require('express')
const cors = require('cors')
const host = '0.0.0.0';
const port = process.env.PORT || 5000;


// express instance.
const app = express()
app.use(express.json())

// cors
app.use(cors())

// port config
app.set('port', port)

// routes
app.use('/api',require('./routes'))

// express init
app.listen(port, host, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`Server running on port: ${port}`)
  }
})