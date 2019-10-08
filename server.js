const app = require('express')();
const port = 3000;
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    // res.sendFile( __dirname + 'index.html');
    console.log(res.sendFile(__dirname + '/index.html'));
});

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

io.on('connection', (socket) => {
    console.log('a user connected');
});

http.listen(3000, () => {
    console.log(`listening on port: http://localhost:${port}`);
})