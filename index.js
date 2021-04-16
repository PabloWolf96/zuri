const path = require('path');
const fs = require('fs');
const http = require('http');
const file = path.join(__dirname, 'result/posts.json');
const ws = fs.createWriteStream(file);
http.get('http://jsonplaceholder.typicode.com/posts', resp => {
    resp.pipe(ws);
});