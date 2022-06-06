//dependency
const express = require('express');

//creates express server
const app = express();

//initial port (localhost:3001)
const PORT = process.env.PORT || 3001;

//parsing data
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});