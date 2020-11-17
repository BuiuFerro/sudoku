const express = require('express');
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, './public')));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})