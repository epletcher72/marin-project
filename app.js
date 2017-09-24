const express = require('express')
const app = express()

const request = require('request')

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/html/parks.html')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/quail', function (req, res) {
    res.send(req.params)
});

app.get('/park', function (req, res) {
    request('https://data.marincounty.org/resource/dcvn-meyw.json', (error, response, body) => {
        res.send(body)
    });
});
