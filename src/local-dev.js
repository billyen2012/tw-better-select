const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'bundle.js'), {
        headers: {
            'Content-Type': 'text/javascript; charset=UTF-8',
        },
    })
})

app.listen(3000, () => {
    console.log('app listening on port 3000')
})
