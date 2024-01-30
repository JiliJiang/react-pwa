const Image = require('../models/image');
const sequelize = require('../config/connection');

const imagedata = [

];

sequelize
  .sync({ force: true })
  .then(() => {
    return Image.bulkCreate(imagedata);
  })
  .then(dbImageData => {
    console.log('Images seeded!');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
