const express = require ('express');

const App = express();

App.get('/teste', (res, req) => {
  return res.json({ hello: 'World 2' })
});

App.listen(3333);