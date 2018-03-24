const multer = require('multer');

var storage = multer.diskStorage({
  // destino del fichero
  destination: function (req, file, cb) {
    cb(null, './upload/posts/')
  },
  // renombrar fichero
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

module.exports = multer({ storage: storage });
