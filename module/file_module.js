let fs = require('fs');
let http = require('http');

//  Read File

/*
http.createServer(function (req, res) {
    fs.readFile('http_url_query.js', function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('File not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
        }
        return res.end();
    });
}).listen(8080, () => {
    console.log('Server is running at http://localhost:8080');
});
*/



//Create File


/*
fs.appendFile('mynewFile1.txt' , 'hello World' , function(err){
    if (err) throw err;
    console.log("Saved");
});

*/



//create file with writiteing


