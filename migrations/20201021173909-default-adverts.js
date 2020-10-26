module.exports = {
  async up(db, client) {
    const {fixTypes, readJson } =  require('./utils/helpers');
    await db.collection('adverts').insertMany(readJson('default-adverts.json').map(fixTypes));
  },

  async down(db, client) {
    const { readJson } =  require('./utils/helpers');
    const adverts = readJson('default-adverts.json');
    for(const advert of adverts){
      await db.collection('adverts').remove({'creator._id': advert.creator._id});
    }
  }
};
