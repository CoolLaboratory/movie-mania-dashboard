const fireApp = require('../_admin')
const authRouter = require('express').Router()


authRouter.get('/login', (req, res) => {
  res.send('/login')
})

authRouter.post('/register', (req, res) => {
  console.log(req.body)
  res.send({...req.body})
  // fireApp.auth().createUser({
  //   displayName: '',
  //   email: '',
  //   password: '',
  //   photoURL: '',
  //   disabled: true
  // })
})


module.exports = authRouter