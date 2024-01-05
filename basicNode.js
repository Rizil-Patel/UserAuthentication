// const http = require("http");
import http from "http";
// import hello,{gfName1,gfName2} from "./features.js";
import * as myObj from "./features.js";
// import fs from "fs";
import path from "path";

console.log(path.dirname("/home/random/index.js"));

// const gfName = require("./features");
// import {gfName1,gfName2} from "./features.js";

// const home = fs.readFileSync("./index.html",() =>{
//     console.log("file read");
// });

console.log(myObj.randomNum());
console.log(myObj);

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/about") {
        res.end(`<h1>Love is ${myObj.randomNum()}</h1>`);
    }
    if (req.url === "/") {
        res.end("<h1>Home Page</h1>");
    }
});

server.listen(5000, () => {
    console.log("server is working");
});
