const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.post('/login', (req, res) => {
  const { username, password } = req.body
  if (username == 'admin' && password == '1234') {
    res.json({
      token: Buffer.from(`admin:1234`).toString('base64'),
      user: { username },
    })
  } else {
    res.status(401).json({ err: 'Not authenticated' })
  }
})

module.exports = app
