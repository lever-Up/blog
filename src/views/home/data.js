Array.prototype.random = Array.from({length: 6}).map((d, i) => i);

export const carouseData = Array().random.map(i => ({
  id: i,
  title: `carouseCard-${i}`,
  img: 'http://pic33.photophoto.cn/20141031/0017030508560806_b.jpg',
  createTime: new Date('2018-07-15 20:03:38'),
  desc: `carouseCard-dec-${i}`
}));

export const paginationData = Array().random.map(i => ({
  id: `paginationData-${i}`,
  title: `火影忍者-${i}`,
  img: 'http://pic33.photophoto.cn/20141031/0017030508560806_b.jpg',
  createTime: new Date('2018-07-15 20:03:38'),
  desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈，哈哈哈哈哈哈哈哈哈哈哈哈。哈哈哈哈哈哈哈哈哈，哈哈哈哈哈哈哈哈哈哈哈哈哈',
}));
