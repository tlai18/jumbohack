const express = require('express')
const mongoose = require('mongoose')

const lawyerRoutes = require('./routes/lawyers')

require('dotenv').config()

const app = express();

app.use(express.json())
app.use((req, res, next) => {
        console.log(req.path, req.method, req.body)
        next()
})

app.get('/', (req, res) => {
        res.send('Hello, world!');
});

app.use('/api/lawyers', lawyerRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
        app.listen(process.env.PORT, () => {
                console.log('listening on port', process.env.PORT)
        }) 
}
).catch((error) => {console.log(error)})
