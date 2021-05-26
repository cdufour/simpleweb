const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Ciao, tutto bene ?')
})

app.get('/help', (req, res) => {
    res.send('Aiutooooooooooooo !!!')
})

app.listen(8080, () => {
    console.log('Server listening on port 8080')
})