const connectToMongo = require('./src/db');
const express = require('express')
const app = express()
const port = 8080

//connect DB
connectToMongo();

//middleware
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./src/routes/auth'))
app.use('/api/notes', require('./src/routes/notes'))


app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})