module.exports = {
  async up(db, client) {
    await db.collection('adverts').updateMany(
      {},

      {
        $set: {
          programmingLanguages: ['React.js', 'Angular.js', 'HTML'],
          preRequisites: 'Anglų ir Lietuvių kalbos',
          advertImageUrl:
            'https://miro.medium.com/max/1838/1*6ahbWjp_g9hqhaTDSJOL1Q.png',
          lessonDescription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque amet sunt ut numquam eum voluptatum reiciendis delectus laboriosam qui aliquam commodi pariatur nulla, atque accusantium dolores quia tempore iusto quibusdam sapiente culpa porro molestiae necessitatibus! Quae atque debitis magnam tempore.',
          categories: [
            '6000906c9d822649dbab00ad',
            '6000908f9d822649dbab00ae',
            '600090ab9d822649dbab00af',
            '600090c69d822649dbab00b0',
          ],
          learnItems: [
            '6000982e9d822649dbab00b1',
            '600098459d822649dbab00b2',
            '600098529d822649dbab00b3',
            '600098689d822649dbab00b4',
          ],
          lessonsList: [
            '6005e450178d0c8941349093',
            '6005e5f3178d0c8941349095',
            '6005e613178d0c8941349096',
          ],
        },
      }
    );
  },

  async down(db, client) {},
};
