// Dependencies
// =============================================================
const router = require('express').Router();
const Image = require('../models/image');
const multer = require ('multer');
const cors = require('cors');

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './upload/')
  },
  filename: function(req, file, cb){
    cb(null, file.originalname)
  }
});

const upload = multer ({storage: storage});

// Routes
// =============================================================

// GET route for getting all of the images
router.get('/api/images', cors(), (_req, res) => {
  Image.findAll({}).then(dbImage => {
    res.json(dbImage)
    
    
  });
});


// POST route for saving a new image

router.post('/api/images', cors(), upload.single('imageFile'), (req, res) => {

  console.log(req.file)

  Image.create({
    text: req.body.text,
    imageFile: req.file.path,
    
  }).then(dbImage => {
    console.log("done")
    res.json(dbImage);
  });
});


module.exports = router;
