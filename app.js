const fullDate = require('./utilities/date')
const { getDateString, getTime } = fullDate
const express = require('express');
const app = express();
const port = 3000;
const absolutePath = `${__dirname}/index.html`
const publicPath  = `${__dirname}/public`

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
})

app.listen(port,() => {
    console.log({port: port})
})

app.get('/api/:inputtedDate',  (req, res) => {
    const { inputtedDate } = req.params
    let data = inputtedDate;

    if (!data.split('').some((x) => x === '-')) {
       data = parseInt(data);
    }

    res.json({'unix': getTime(data), 'utc': getDateString(data)})
})