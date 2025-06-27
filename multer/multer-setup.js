const multer = require("multer");
const path = require("path");

// memory storage
const storage = multer.memoryStorage();

function fileFilter(req, file, cb) {
    const extnames = [".png", ".jpeg", ".jpg", ".webp"];
    let ext = path.extname(file.originalname);
    let included = extnames.includes(ext);

    if(included) {
        cb(null, true);
    } 
    else {
        cb(new Error("these files are not allowd", false));
    }
}

// Disk Storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/images/uploads");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, uniqueSuffix + path.extname(file.originalname));
//   }
// })

const upload = multer({storage: storage, 
fileFilter: fileFilter,
limits: {fileSize: 2 * 1024 * 1024}
});

module.exports = upload;

