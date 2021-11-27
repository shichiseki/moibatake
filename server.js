const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use('/img', express.static(__dirname + '/dist/img/'));
app.use('/css', express.static(__dirname + '/dist/css/'));
app.use('/js', express.static(__dirname + '/dist/js/'));
app.get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
app.get('/api/hello', (req, res) => {
    res.send('hello i am express')
})