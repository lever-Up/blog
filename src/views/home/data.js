Array.prototype.random = Array.from({length: 6}).map((d, i) => i);

export const carouseData = Array().random.map(i => ({
  id: i,
  title: `carouseCard-${i}`,
  img: 'http://pic33.photophoto.cn/20141031/0017030508560806_b.jpg',
  createTime: new Date('2018-07-15 20:03:38'),
  desc: `carouseCard-dec-${i}`
}));

export const paginationData = {
  id: `paginationData`,
  title: `火影忍者`,
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532370884327&di=b05c3838b2a47df500620fb167040f5b&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201505%2F08%2F20150508155454_vJMeU.jpeg',
  createTime: new Date('2018-07-15 20:03:38'),
  desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈，哈哈哈哈哈哈哈哈哈哈哈哈。哈哈哈哈哈哈哈哈哈，哈哈哈哈哈哈哈哈哈哈哈哈哈',
};
