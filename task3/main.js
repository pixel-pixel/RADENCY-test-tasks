const express = require('express')
const app = express()
const notesRoute = require('./routes/notesRoute')
const port = 3008

app.use(express.json())
app.use('/notes', notesRoute)

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log('Server is working now')
})