// Dependencies
// =============================================================
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes/api-routes');
const path = require('path');
const cors = require('cors');
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
// Requiring our models for syncing
//const db = require('./models/image');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use('/upload', express.static(path.join(__dirname, 'upload')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });


// Routes
// =============================================================
app.use(routes);





// Syncing our sequelize models and then starting our Express app
// =============================================================
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
  });
});
