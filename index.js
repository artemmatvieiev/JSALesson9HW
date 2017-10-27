const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (/jpg|jpeg|png|gif|js/.test(req.url)) {
    fs.readFile(req.url.replace('/', ''), (err, data) => {
      if (err) {
        res.end('<strong>Error!</strong>');
        throw new Error('Error while reading file: ' + err);
      }
      else {
        res.end(data);
      }
    });
    return;
  }
  fs.readFile('index.html', 'utf-8', (err, data) => {
    if (err) {
      res.end('<strong>Error!</strong>');
      throw new Error('Error while reading index.html');
    };
    const processedData = data.replace('</body>', `<p>${new Date().toLocaleDateString('en-GB')}</p></body>`);
    res.end(processedData);
  });
});
server.listen(3000, "127.0.0.1", function () {
  console.info("Server listening at 127.0.0.1:3000");
});