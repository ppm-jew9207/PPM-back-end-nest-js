module.exports = { 
  async up(db, client) {
    const { Types } = require('mongoose');

    await db.collection('lessons').updateMany({}, 
      [
        { $set: { 
          "categories": ["6000906c9d822649dbab00ad", "6000908f9d822649dbab00ae", "600090ab9d822649dbab00af", "600090c69d822649dbab00b0"],
          "learnItems": ["6000982e9d822649dbab00b1", "600098459d822649dbab00b2", "600098529d822649dbab00b3", "600098689d822649dbab00b4"],
          "resources": ["Google","Books","Mom"]
        }}
      ]);
  },

  async down(db, client) {
    
  }
};