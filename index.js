const fs = require('fs');
const http = require('http');
const url = require('url');

/// FILES //////////////
////////////////////////////////////////////////////////////////////
// Blocking, synchronous way
// const textIn = fs.readFileSync("link.txt", "utf-8");

// const textOut = `This is a post: ${textIn}/n Created on ${Date.now()}`;

// fs.writeFileSync("out.txt", textOut);
// console.log("All set and done!")

// Non-blocking, asynchronous way
// fs.readFile("link.txt", "utf-8", (err, data) => {
//     console.log(data);
// });
// console.log("reading file...")

///////////////////////////////////////////////////////////////////////////

// SERVER //////////////

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    
    const pathName = req.url;

    if(pathName ==="/" || pathName === "/overview") {
        res.end("This is the overview");
    } else if (pathName === "/product") {
        res.end("This is the product");
    } else if (pathName === "/api") {
        res.writeHead(200, {
            "Content-type": "application/json"
        });
        res.end(data);
    } else {
        res.writeHead(404, {
            "Content-type": "text/html",
            "my-own-header": "hello-world"
        });
        res.end("<h1>Page not found!</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to requests on port 8000");
})