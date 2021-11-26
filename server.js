const express = require('express')
const app = express()

app.use('/img', express.static(__dirname + '/dist/img/'));
app.use('/css', express.static(__dirname + '/dist/css/'));
app.use('/js', express.static(__dirname + '/dist/js/'));
app.get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'))

app.listen(5000, () => console.log('Example app listening on port 3000!'))
app.get('/api/hello', (req, res) => {
    res.send('hello i am express')
})