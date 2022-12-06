const express = require("express");
const mongoose = require("mongoose");
const app = express()
const cors = require('cors')
const data = require('./routes/datas')
const user = require('./routes/users')

// app.use(express.json('application/json'))
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(data)
app.use(user)

mongoose.connect('mongodb://localhost:27017/dearme', {
   useUnifiedTopology: true,
   useNewUrlParser: true
})
.then(() => console.log('Info: Database Connected'))
.catch(e => console.log(`Error: ${e}`))

app.listen(5000, () => console.log(`Info: Server Running at https://localhost:5000`))
