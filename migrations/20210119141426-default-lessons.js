module.exports = {
  async up(db, client) {
    const {fixTypes, readJson } =  require('./utils/helpers');
    await db.collection('lessons').insertMany(readJson('default-lessons.json').map(fixTypes));
  },

  async down(db, client) {
    const { readJson } =  require('./utils/helpers');
    const lessons = readJson('default-lessons.json');
    for(const lesson of lessons){
      await db.collection('lessons').remove({'creator._id': lesson.creator._id});
    }
  }
};