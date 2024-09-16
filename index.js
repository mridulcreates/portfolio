const express = require("express");
const path = require('path');
const app = express();

app.get('/', (req, res) => res.redirect('/home'));
app.use((req, res, next) => {
    req.url = req.url.endsWith('/') ? req.url.slice(0, -1) + '.html' : req.url + (!req.path.includes('.') ? '.html' : '');
    next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res) => res.status(404).sendFile(path.join(__dirname, 'public', '404.html')));
app.listen(3000, () => console.log(`Server running on http://127.0.0.1:3000`));