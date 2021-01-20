module.exports = {
  async up(db, client) {
    const {fixTypes, readJson } =  require('./utils/helpers');
    await db.collection('learnitems').insertMany(readJson('default-learn-items.json').map(fixTypes));
  },

  async down(db, client) {
    const { readJson } =  require('./utils/helpers');
    const learnItems = readJson('default-learn-items.json');
    for(const learnItem of learnItems){
      await db.collection('learnitems').remove({'creator._id': learnItem.creator._id});
    }
  }
};
