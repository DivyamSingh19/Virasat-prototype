import multer from 'multer';
import path from 'path';

 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath = 'uploads/';

    if (file.fieldname === 'profilePic') uploadPath += 'profiles/';
    else if (file.fieldname === 'eventImage') uploadPath += 'events/';
    else if (file.fieldname === 'resume') uploadPath += 'resumes/';

    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

 
const fileFilter = (req: any, file: Express.Multer.File, cb: any) => {
  if (file.fieldname === 'resume' && !file.mimetype.includes('pdf')) {
    return cb(new Error('Only PDF resumes are allowed'), false);
  }
  if (!['image/jpeg', 'image/png'].includes(file.mimetype)) {
    return cb(new Error('Only image files (JPG, PNG) are allowed'), false);
  }
  cb(null, true);
};

 
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, //limit->5MB
});

export default upload;
