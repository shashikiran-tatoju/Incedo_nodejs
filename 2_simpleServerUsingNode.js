
// var http = require('http');

// var server = http.createServer( function onRequest( req , res){
//     res.writeHead(200 , {'context-type':'text/plain'});
//     res.write('this is a simple HTTP server using node js ');
//     res.end();
// });

// server.listen(3000 ,()=>{
//     console.log(" Server is Running")
// })



//----------Example 2 ------- SetTimeout -------------
// setTimeout( 
//     ()=>{
//         console.log(" Execute this block of code Executes after 5 seconds")
//     },
//     5*1000
// );   

//----------Example 3 ------- SetTimeout with function  -------------

const shashi =()=>{
    console.log( "settimeout with function");
};

 setTimeout( shashi, 3000);