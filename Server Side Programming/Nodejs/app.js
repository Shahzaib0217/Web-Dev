const http = require('http');
// http protocol is used to handle client's request and server's response

/* createServer() takes functions as a parameter,
I've passed an arrow fun() with 2 parameters req,res
*/
/* req: it receives user request from url and 
access it in Node.js. user request can be a form 
submission or any search query
*/
/* res: is the resonse sent to the client */
http.createServer((req, res) => {
    res.write("<h1>Hi this is Shahzaib khan</h1>");
    res.end(); // to tell Nodejs where to stop
}).listen(4500);

/* Second Method
We can define a function() separately and can pass
 its name as a parameter in createServer()
 
 const datacontrol = (req, res) => {
    res.write("<h1>Hi this is Shahzaib khan</h1>");
    res.end(); // to tell Nodejs where to stop
} 
 http.createServer(datacontrol).listen(4500);
 */

