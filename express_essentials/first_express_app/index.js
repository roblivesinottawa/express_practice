const express = require('express')
const data = require('./data/data.json')

const app = express()
const port = 3000

// add static paths by adding middleware
app.use(express.static('public'))
app.use('/images', express.static('images'))

app.get('/', (req, res) => {
    res.json(data)
})

app.get('/item/:id', (req, res, next) => {
    // this is the middleware that pulls the data
    let user = Number(req.params.id)
    // middleware that uses the req object
    console.log(`request from ${req.originalUrl}`)
    console.log(`request type ${req.method}`)
    // everything above is middleware
    res.send(data[user])
    next()
}, (req,res) => {
    console.log('got the right data?')
}
)

// chaining
app.route('/item')
    .get((req, res) => {
        // res.download('images/rocket.jpg')
        // res.redirect('http://www.google.com')
        // res.end()
        res.send(`another get request on ${port}`)
    })
    .put((req, res) => {
        res.send(`a put request on port ${port}`)
    })
    .delete((req, res) => {
        res.send(`a delete request on port ${port}`)
    })


app.listen(port, () => {
    console.log(`app listening on ${port}`)
    // console.log(data)
})