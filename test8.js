var http = require('http');
var server = http.createServer();

var port = 3000;
var host = '192.168.0.20';

server.listen(port , host, '50000' , function(){
    console.log('웹서버가 시작되었습니다:%s , %d,', host, port);
});

server.on('connection', function(socket){
    var addr = socket.address();
    console.log('클라이언트 요청이 들어왔습니다');
    
});
server.on('request', function(req, res){
    console.log('클라이언트 요청이 들어왔습니다');
    console.dir(req);
});

server.on('close' , function(){
    console.log('서버가종료');
});