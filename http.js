// const http = require('http');
// obj =[{
//     name: 'John Doe',
//     age: 30,
//     city: 'New York'
// },{
//     name: 'Jane Doe',
//     age: 28,
//     city: 'Los Angeles'
// }]
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/json'});
//     res.end(JSON.stringify(obj));
//     // res.end("<h1>hello<h1>");
  
// });
// PORT = 3000
// server.listen(PORT, () => {
//     console.log('Server is running at http://localhost:3000/');
// });




// -----------------------------------------------------------------
// To run this code, save it in a file named `server.js` and run it using Node.js:
//**************************** */ render index.html filw using fs,path and https moudle-*******************************************************
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Define the path to the index.html file
    const filePath = path.join(__dirname, 'index.html');
    // console.log(filePath);


  // Read the index.html file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Handle file read error
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }
    // Set the response HTTP headers with HTTP status and content type
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Send the HTML file content as the response body
    res.end(data);
  });
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('Server is running at http://localhost:3000/');
});
