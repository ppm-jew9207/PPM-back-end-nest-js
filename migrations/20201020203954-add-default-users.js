
module.exports = {
  
  async up(db, client) {
    const { readJson } =  require('./utils/mongo');
    await db.collection('users').insertMany(readJson('default-users.json'));
  },

  async down(db, client) {
    const { readJson } =  require('./utils/mongo');
    const users = readJson('default-users.json');
    for(const user of users){
      await db.collection('users').remove({email: user.email});
    }
  }
};
