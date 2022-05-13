const COLLECTION = 'users';

module.exports = {
  async up(db) {
    const collection = db.collection(COLLECTION);

    await collection.insertMany([
      {
        _id: 1,
        name: 'Adam Smith',
        email: 'asmith@llc.com',
        job: 1,
        reports_to: 2,
      },
      {
        _id: 2,
        name: 'Fiodor Dostoivisk',
        email: 'fdost@llc.com',
        job: 1,
        reports_to: 2,
      },
      {
        _id: 3,
        name: 'Sebastian Bach',
        email: 'sbach@llc.com',
        job: 2,
        reports_to: 3,
      },
      {
        _id: 4,
        name: 'Winston Churchill',
        email: 'wchurch@llc.com',
        job: 3,
      },
    ]);
  },

  async down(db) {
    const collection = db.collection(COLLECTION);

    await collection.deleteMany([
      {
        _id: { $in: [1, 2, 3, 4] },
      },
    ]);
  },
};
