const fs = require('fs');
const path = require('path');

const handler = (request, response) => {
  const endpoint = request.url;
  console.log(endpoint);
  const method = request.method;
  console.log(method);
  if (endpoint === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    const filePath = path.join(__dirname, "..", "public", "index.html");
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
      } else {
        response.writeHead(200, { "Content-type": "text/html" });
        response.end(file);
      }
    });
  } else if (endpoint === "/style.css") {
    const filePath = path.join(__dirname, "..", "public", "style.css");
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
      } else {
        response.writeHead(200, { "Content-type": "text/css" });
        response.end(file);
      }
    });
  } else if (endpoint === "/main.js") {
    const filePath = path.join(__dirname, "..", "public", "main.js");
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
      } else {
        response.writeHead(200, { "Content-Type": "application/javascript" });
        response.end(file);
      }
    });
  }
}
module.exports = {
  handler
}
