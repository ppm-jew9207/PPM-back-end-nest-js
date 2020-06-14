/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const express = require('express');
const app = express();

const compression = require('compression');
const path = require('path');
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https') {
    res.redirect(`https://${req.header('host')}${req.url}`);
  } else {
    next();
  }
});
app.use(compression());
app.set('port', process.env.PORT || 5000);
app.use(express.static(`${__dirname}/dist/apps/api/main.js`));

app.listen(app.get('port'), function () {
  console.log('Node app is running at localhost:' + app.get('port'));
});
