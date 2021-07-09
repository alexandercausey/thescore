const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mtg = require('mtgsdk');

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/commanders', (req, res) => {
  mtg.card.where({
    supertypes: 'legendary',
    types: 'creature',
    page: 14
  })
  .then(results => {
    console.log(results);
    const commanders = [];
    const comms = results.forEach((result) => {
      let newComm = {};
      newComm.name = result.name;
      newComm.imageUrl = result.imageUrl;
      commanders.push(newComm);
    })
    res.send(commanders);
  })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});