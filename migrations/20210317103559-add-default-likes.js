module.exports = {
  async up(db, client) {
    const {readJson} =  require('./utils/helpers');

    const addLikes = async (db, creator, likes) => {
      const query = creator;

      const advertsCollection = await db.collection('adverts').find(query).toArray();
      const advertsIds = advertsCollection.map((item) => item._id);
      let likesArray = [];
      advertsIds.forEach((advertID)  => {
        likes.map((like) => {
          likesArray.push({
            advert : advertID,
            ...like
          })
        })
      });
      db.collection('likes').insertMany(likesArray);
    }

    let creator = {
      "creator._id" :  "5f8f57ebbdf4657e5be58c6a"
    }
    const likes = readJson('default-likes.json');
    await addLikes(db, creator, likes);
    creator = {
      "creator._id" :  "5f8f57ebbdf4657e5be58c6b"
    }
    await addLikes(db, creator, likes);
  },

  async down(db, client) {
    const { readJson } =  require('./utils/helpers');
    const users = readJson('default-users.json');
    for(const user of users){
      await db.collection('likes').deleteMany({user: user._id.$oid});
    }
  }
};
