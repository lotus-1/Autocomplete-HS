const fs = require("fs");
const path = require("path");
const language = fs
  .readFileSync(path.join(__dirname, "..", "src", "words.txt"), "utf-8")
  .split(/\n/);

const handlerHome = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>  Sorry, there was an error on our side...</h1>");
    } else {
      response.writeHead(200, { "content-Type": "text/html" });
      response.end();
    }
  });
};
const handlerPublic = (request, response, url) => {
  const extension = url.split(".")[1];
  const extensionTypes = {
    html: "text/html",
    js: "application/javascript",
    css: "text/css"
  };
  const filePath = path.join(__dirname, "..", url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end("<h1>Soooo sorry... I can't find this file...</h1>");
    } else {
      response.writeHead(200, { "Content-Type": extensionTypes[extension] });
      response.end(file);
    }
  });
};
const handlerSearch = (request, response, url) => {
  console.log(words);
  const result = words.filter(el => el[0] === "A");
  console.log(result);
};

module.exports = {
  handlerHome,
  handlerPublic,
  handlerSearch
};
