const COLLECTION = 'jobs';

module.exports = {
  async up(db) {
    const collection = db.collection(COLLECTION);

    await collection.insertMany([
      {
        _id: 1,
        description: 'developer',
      },
      {
        _id: 2,
        description: 'tech_lead',
      },
      {
        _id: 3,
        description: 'scrum',
      },
    ]);
  },

  async down(db) {
    const collection = db.collection(COLLECTION);

    await collection.deleteMany([
      {
        _id: { $in: [1, 2, 3] },
      },
    ]);
  },
};
