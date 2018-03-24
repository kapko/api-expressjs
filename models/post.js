const mongoose = require('mongoose');
const schema = mongoose.Schema;
const postModel = new schema({
  title: String,
  body: String,
}, {collection: 'post'});

module.exports = mongoose.model('post', postModel);
