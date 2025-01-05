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



//create file with writiteing using open fuction

/*
fs.open('mynewfile2.txt' , 'r' , function (err , file){
    if(err) throw err;
    console.log("Saved !!");
});
*/


//The fs.writeFile() method replaces the specified file and content if it exists. 
// If the file does not exist, a new file, containing the specified content, will be created.


/*
fs.writeFile('mynewfile3.txt' , "Hello It is my Content !!! " , function(err){
    if (err) {
        throw err
    }
    console.log("Saved !!!");
});

*/



//Update File



//The fs.appendFile() method appends the specified content at the end of the specified file:



/*
let str = "\n Update line "
for(i=1;i<=100;i++)
    {
            str += i;

    }
    console.log(str);
fs.appendFile('mynewfile1.txt' ,str, function(err){
    
    if(err) throw err;
   
});

*/


//he fs.writeFile() method replaces the specified file and content:
/*
fs.writeFile('mynewfile3.txt' , "This is my text" , function(err){
    if(err) throw err;
    console.log("Replace!!!");
});

*/



//Delete Files


//Using fs.unlink()


fs.unlink('mynewfile1.txt',function(err){
    if(err) throw err;
    console.log("deleted!!!");
});
