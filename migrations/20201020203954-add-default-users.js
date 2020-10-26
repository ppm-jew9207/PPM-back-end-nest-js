
module.exports = {
  
  async up(db, client) {
    const {fixTypes, readJson } =  require('./utils/helpers');
    await db.collection('users').insertMany(readJson('default-users.json').map(fixTypes));
  },

  async down(db, client) {
    const { readJson } =  require('./utils/helpers');
    const users = readJson('default-users.json');
    for(const user of users){
      await db.collection('users').remove({email: user.email});
    }
  }
};
