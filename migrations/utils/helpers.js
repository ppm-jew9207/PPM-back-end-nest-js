const fs = require('fs');
const path = require('path');

module.exports.ObjectId = require('mongoose').Types.ObjectId;

module.exports.fixTypes = (item) => {
  if (item && typeof item === 'object' && item.$oid) {
    return module.exports.ObjectId(item.$oid);
  }

  if (item && typeof item === 'object') {
    const result = {};
    const keys = Object.keys(item);
    for (const key of keys) {
      result[key] = module.exports.fixTypes(item[key]);
    }
    return result;
  }
  return item;
};

module.exports.readJson = (file) => {
  const pathToFile = path.resolve(__dirname, '../defaultDataMocks/', file);
  const res = fs.readFileSync(pathToFile, 'utf8');
  return JSON.parse(res);
};