const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// init app
const app = express()
app.use(express.json())
app.use(cors())

// init DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { 
    useNewUrlParser : true, 
    useUnifiedTopology: true  
})

// importing model registered in the app
requireDir('./src/models')

// routes
app.use('/api', require('./src/routes'))

app.listen(3000, () => console.log('Server is running on port 3000'))
