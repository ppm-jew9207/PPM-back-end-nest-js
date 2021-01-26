module.exports = {
  async up(db, client) {
    const {fixTypes, readJson } =  require('./utils/helpers');
    await db.collection('categories').insertMany(readJson('default-categories.json').map(fixTypes));
  },

  async down(db, client) {
    const { readJson } =  require('./utils/helpers');
    const categories = readJson('default-categories.json');
    for(const category of categories){
      await db.collection('categories').remove({'creator._id': category.creator._id});
    }
  }
};
