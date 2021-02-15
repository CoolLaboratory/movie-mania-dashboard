const app = require('express')()

app.use(require('express').json())
app.use('/api/auth', require('./_router'))

module.exports = app