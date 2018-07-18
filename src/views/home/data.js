Array.prototype.random = Array.from({length: 6}).map((d, i) => i);

export const carouseData = Array().random.map(i => ({
  id: i,
  title: `carouseCard-${i}`,
  img: 'http://pamnpeizp.bkt.clouddn.com/vue.jpg',
  createTime: new Date('2018-07-15 20:03:38'),
  desc: `carouseCard-dec-${i}`
}));
