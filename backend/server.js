const express = require('express')
const mongoose = require('mongoose')

const mealswipeRoutes = require('./routes/mealswipes')
const userRoutes = require('./routes/users')

require('dotenv').config()

const app = express();

app.use(express.json())
app.use((req, res, next) => {
        console.log(req.path, req.method, req.body)
        next()
})

// app.get('/', (req, res) => {
//         res.send('Hello, world!');
// });

app.use('/api/mealswipes', mealswipeRoutes)
app.use('/api/user', userRoutes)


mongoose.connect(process.env.MONGO_URI)
.then(() => {
        app.listen(process.env.PORT, () => {
                console.log('listening on port', process.env.PORT)
        }) 
}
).catch((error) => {console.log(error)})
