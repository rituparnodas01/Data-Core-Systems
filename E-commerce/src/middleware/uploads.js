const multer = require('multer');

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory for storing files
  },
  filename: function (req, file, cb) {
    // Remove spaces from the original filename and concatenate it with the current timestamp
    const filenameWithoutSpaces = file.originalname.replace(/\s+/g, '');
    cb(null, Date.now() + '-' + filenameWithoutSpaces); // Define file naming scheme
  }
});

const fileFilter = (req, file, cb) => {
  // Accept only specific file types, adjust the MIME types as needed
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(null, false); // Reject file
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;