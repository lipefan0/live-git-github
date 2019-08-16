const express = require ('express');

const App = express();

App.get('/teste', (res, req) => {
  return res.json({ hello: 'Wolrd' })
});

App.listen(3333);