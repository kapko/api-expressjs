const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const mongoose = require('mongoose');
const schema = require('./schema/index');
const cors = require('cors');
const path = require('path');
const postUploads = require('./upload/post.files');
const router = require('./router/index');

// db connections
// mongoose.connect('mongodb://kapko19:123123@ds257627.mlab.com:57627/kvartirka');
mongoose.connect('localhost:27017/kvartira');

// static files
app.use(express.static(path.join(__dirname, '/')));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// save post files
app.post("/upload-post-files", postUploads.array("uploads[]", 10), function (req, res) {
  res.send(req.files);
});

const db = mongoose.connection;
db.on('error', () => console.error('CONNECT ERROR'))
  .once('open', () => console.log('working in kvartirka'))
// api
app.use('/api', router);

app.listen(4000);
console.log('post is =', 4000);