const fullDate = require('./utilities/date')
const { getDateString, getTime } = fullDate
const express = require('express');
const os = require('os');
const net = require("net");
const app = express();
const port = 3000;
const absolutePath = `${__dirname}/views/index.html`
const publicPath  = `${__dirname}/public`

const networkInterfaces = os.networkInterfaces()

const localIp = networkInterfaces['en0'][1].address

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
})

app.listen(port, localIp,() => {
    console.log({port: port, ip: localIp})
})

app.get('/api/:inputtedDate',  (req, res) => {
    const { inputtedDate } = req.params
    let data = inputtedDate;

    if (!data.split('').some((x) => x === '-')) {
       data = parseInt(data);
    }

    res.json({'unix': getTime(data), 'utc': getDateString(data)})
})