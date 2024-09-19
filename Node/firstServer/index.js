const http=require("http");
const port=9000;
const fs=require("fs");

function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200, {'content-type': 'text/html'});
    // res.send("Hi there")

    let filepath;
    switch(req.url){
        case '/':
            filepath = "./index.html"
            break;
        case '/contact':
            filepath = "./contact.html"
            break;
        default:
            filepath = "./404.html"
    }

    fs.readFile(filepath, function(err,data){
        if(err){
            console.log("error",err);
            return res.end("<h1> Error! </h1>");
        }
        return res.end(data);
    });
}


const server=http.createServer(requestHandler);

server.listen(port, function(err){
    if(err){
        console.log(error);
        return;
    }
    console.log("Server is up and running on port:", port);
});