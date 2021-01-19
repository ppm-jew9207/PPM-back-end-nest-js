
  module.exports = {
    async up(db, client) {
      const {fixTypes, readJson } =  require('./utils/helpers');
      await db.collection('adverts').updateMany(readJson('update-advert.json').map(fixTypes));
    },
  
    async down(db, client) {
      const { readJson } =  require('./utils/helpers');
      const adverts = readJson('update-advert.json');
      for(const advert of adverts){
        await db.collection('adverts').remove({'creator._id': advert.creator._id});
      }
    }
  };