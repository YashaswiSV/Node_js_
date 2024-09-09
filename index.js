// var http=require("http");

// var clg=require("./cybrom");

// http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.write("<h1>welcome againnnn</h1>");
//     res.write(clg.myCollege());
//     res.write(clg.myfees());
//     res.write(clg.myTeachers());



//     res.end();

// }).listen(7000);

// ===========================================================================





// var http = require("http");
// var fs = require("fs");

// http.createServer((req,res)=>{
//     fs.readFile("adi.txt" , (err , data)=>{
//         res.write(data);
//         res.end()
//     })
// }).listen(9000);

// ====================================================================

//var fs = require("fs");
//fs.appendFile("raj.txt" , " hi this is my fil " , (err)=>{
  //  if(err) throw err;
    //console.log("file created");
//});

//====================================================================

const http=require("http");
const uc=require("")

http.createServer((req,res)=>{
      
       res.write("hello guys");
       res.write("happy monday");
        res.end();
}).listen(9000)

//========================================express================================

/*
const express = require("express")
const app = express();

app.get("/" ,(req,res)=>{
    res.send("ths is express");
})
app.listen(9000)
*/