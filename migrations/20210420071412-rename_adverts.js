module.exports = {
  async up(db) {
    db.collection('adverts').rename('courses');
    db.collection('likes').updateMany( {}, { $rename: { "advert": "course" } } )

  },

  async down(db) {
    db.collection('courses').rename('adverts');
    db.collection('likes').updateMany( {}, { $rename: { "course": "advert" } } )
  }
};