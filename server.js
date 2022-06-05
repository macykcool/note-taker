
const express = require('express');


const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});