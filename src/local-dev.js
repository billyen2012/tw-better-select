const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/tw-better-select', (req, res) => {
    res.sendFile(path.join(__dirname, 'tw-better-select.js'), {
        headers: {
            'Content-Type': 'text/javascript; charset=UTF-8',
        },
    });
});

app.get('/tw-dict', (req, res) => {
    res.sendFile(path.join(__dirname, 'tw-dict.js'), {
        headers: {
            'Content-Type': 'text/javascript; charset=UTF-8',
        },
    });
});

app.get('/constant/TW_BETTER_SELECT', (req, res) => {
    res.sendFile(path.join(__dirname, 'constant', 'TW_BETTER_SELECT.js'), {
        headers: {
            'Content-Type': 'text/javascript; charset=UTF-8',
        },
    });
});

app.listen(3000, () => {
    console.log('app listening on port 3000');
});
