const fs = require('fs');
const path = require('path');

module.exports.readJson = (file) => {
  const pathToFile = path.resolve(__dirname, '../defaultDataMocks/', file);
  const res = fs.readFileSync(pathToFile, 'utf8');
  return JSON.parse(res);
};