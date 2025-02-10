const multer = require("multer");
const path = require("path");

// set our multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const fileName =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

// file filter function
const checkFileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Only upload image formats!"));
  }
};

// multer middleware
module.exports = multer({
  storage: storage,

  limits: 5 * 1024 * 1024, // 5 MB
});
