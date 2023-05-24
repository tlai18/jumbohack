const express = require('express')
const mongoose = require('mongoose')

const mealswipeRoutes = require('./routes/mealswipes')
const userRoutes = require('./routes/users')

require('dotenv').config()

const app = express();

// if (process.env.NODE_ENV === 'production') {
//         app.use(express.static(path.join(__dirname, '../build'))); // serve the static react app
//         app.get(/^\/(?!api).*/, (req, res) => { // don't serve api routes to react app
//           res.sendFile(path.join(__dirname, '../build', 'index.html'));
//         });
// }

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
        app.listen(process.env.PORT || 4000, () => {
                console.log('listening on port', process.env.PORT)
        }) 
}
).catch((error) => {console.log(error)})
