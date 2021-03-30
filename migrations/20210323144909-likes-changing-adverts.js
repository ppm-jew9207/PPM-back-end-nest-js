module.exports = {
  async up(db) {
    const changeLikes = async (db, creator) => {
      const query = creator;
      const advertsCollection = await db.collection('adverts').find(query).toArray();
      const advertsIds = advertsCollection.map((item) => item._id);
      for(const advertId of advertsIds) {
        await db.collection('likes').updateMany({advert: advertId}, {$set: {advert: advertId.toString()}});
      }
    }

    let creator = {
      "creator._id" :  "5f8f57ebbdf4657e5be58c6a"
    }
    await changeLikes(db, creator);
    creator = {
      "creator._id" :  "5f8f57ebbdf4657e5be58c6b"
    }
    await changeLikes(db, creator);
  },

  async down(db) {
    const changeLikes = async (db, creator) => {
      const query = creator;
      const advertsCollection = await db.collection('adverts').find(query).toArray();
      const advertsIds = advertsCollection.map((item) => item._id);
      for(const advertId of advertsIds) {
        await db.collection('likes').updateMany({advert: advertId.toString()}, {$set: {advert: advertId}});
      }
    }

    let creator = {
      "creator._id" :  "5f8f57ebbdf4657e5be58c6a"
    }
    await changeLikes(db, creator);
    creator = {
      "creator._id" :  "5f8f57ebbdf4657e5be58c6b"
    }
    await changeLikes(db, creator);
  }
};