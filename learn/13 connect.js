var connect = require('connect');
var http = require('http');

var app = connect();

function doFirst(request,response,next){
    console.log("Bacon");
   next();

}
function doSecond(request,response,next){
    console.log("Tuna");
   next();


}
function home(request,response){
    console.log("home");
}
function profile(request,response){
    console.log("profile");
}

app.use(doFirst);
app.use(doSecond);
app.use("/home",home);
app.use("/profile",profile);
// var http = require('http');

// function onRequest(request,response){
//     console.log("A user made a request" + request.url);
//     response.writeHead(200,{"Context-Type": "text/plain"});
//     response.write("Hello World from server");
//     response.end();
//
// }
//
// http.createServer(onRequest).listen(8888);
// console.log("Server is now Running");
// // app.use(doSecond());
//
http.createServer(app).listen(8888);

console.log("Server is running");
