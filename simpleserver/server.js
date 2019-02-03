const http = require('http');
const url = require ('url');
const path = require ('path');
const fs = require('fs');

const mimeTypes = {
  "html":"text/html",
  "jpeg": "image/jpeg",
  "jpg": "image/jpg",
  "png": "image/png",
  "js": "text/javascript",
  "css": "text/css"
};

http.createServer((req, res) => {
  var uri = url.parse(req,url).pathname;
  var fileNanme = path.join(process.cwd(), uneascape(uri));
  console.log('loading'+ uri);
  var stats;

  try{
stats = fs.lstatSync(fileName);
  }catch(e){
res.writeHead(404, {'Content-type':'text/plain'});
res.end();
return;
  }
})