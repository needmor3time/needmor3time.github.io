const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const multer = require('multer');

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/knives");



app.use(() => multer({ dest: './uploads/',
  rename: function (fieldname, filename) {
    return filename;
  },
 }));

 
// app.post('/upload', (req, res, next) => {
//   console.log(req);
//   let imageFile = req.files.file;

//   imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
//     if (err) {
//       return res.status(500).send(err);
//     }

//     res.json({file: `public/${req.body.filename}.jpg`});
//   });

// })

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});