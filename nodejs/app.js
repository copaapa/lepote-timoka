const http = require("http");
const { stringify } = require("querystring");
const PORT = process.env.PORT || 5000;
const server = http.createServer(async (req, res) => {
    //set the request route
    res.setHeader('Access-Control-Allow-Origin', '*');   
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
    var filePath;

    switch(req.url) {
      case '/api/contact':
        filePath = 'json/contact.json';
        break;
      case '/api/subscribe':
          filePath = 'json/subscribe.json';
        break;
      default:
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }

    if (req.method === "POST") {
        //response headers
        res.writeHead(200, { "Content-Type": "text/plain" });
        // create the todo
        let data = '';
        req.on('data', chunk => {
          data += chunk;
        })
        const fs = require('fs'); 
        req.on('end', () => {
          console.log(JSON.parse(data)); 
          obj = JSON.parse(data); //now it an object
          json = JSON.stringify(obj); //convert it back to json
          fs.unlinkSync(filePath);  
          fs.appendFileSync(filePath, json, function (err) {
            if (err) throw err;
          });
        res.end();
        })

    }
    // If no route present

});
server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});
