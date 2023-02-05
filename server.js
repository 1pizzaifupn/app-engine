const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Goodbye from App Engine!');
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
