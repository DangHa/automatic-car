const express = require('express')
const app = express()


// View
app.use('/', express.static(`${__dirname}/../static`));

// Runing server
const port = 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
