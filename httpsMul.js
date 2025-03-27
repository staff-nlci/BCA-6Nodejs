const http = require('http');
const fs = require('fs');
const path = require('path');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Parse the requested URL
  const url = req.url;
  // localhost:3000+/about

  // Define the paths to the HTML files
  const filePaths = {
    '/about': 'about.html',
    '/contact': 'contact.html',
  };

  // Check if the requested URL matches one of the HTML files
  if (filePaths[url]) {
    // Read the HTML file
    fs.readFile(filePaths[url], 'utf8', (err, data) => {
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
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Listen on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Server is listening on port 3000');
  console.log('Server is running at http://localhost:3000/');
  
  
});
