const express = require('express')
// const path = require('path')
// const favicon = require('favicon')
// const logger = require('morgan')
// const cookieParser = require('cookie-parser')
// const bodyParser = require('body-parser')
// const debug = require('debug')

const app = express()
const port = 5000

// define middleware
log = (req, res, next) => {
    console.log(new Date(), req.method, req.url)
    next()
}

helloWorld = (req, res, next) => {
    res.write('Hello World')
    res.end()
    next()
}

app.get('/', log, helloWorld)

app.use(log)





app.listen(port, () => console.log(`Express server listening on port ${port}`))

    
