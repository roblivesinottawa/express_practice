const express = require('express')
const path = require('path')
// const favicon = require('favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const debug = require('debug')


const app = express()
const port = 5000

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/')


// catch 404 and forward to error handler
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404
    next(error)
})

// error handlers

// development
if (app.get('env') === 'development'){
    app.use((error, req, res, next) => {
        res.status(error.status || 500)
        res.render('error', {
            message: error.message,
            error: error
        })
    })
}

// production


app.listen(port, () => {
    if (error) {
        console.log('server error')
    } else {
        console.log(`Express server listening on port ${port}`)
    }
    
}) 