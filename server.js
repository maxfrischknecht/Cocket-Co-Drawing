console.log("app is running");

let express = require('express');
let app = express();
let server = app.listen(3000);

// host everything in that public directory
app.use(express.static('public'));