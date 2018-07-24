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

export const blackboardData = {
  id: 'blackboard-card',
  title: 'TRAVEL',
  desc: '嗖嗖嗖嗖嗖嗖所嗖嗖嗖嗖嗖嗖所所所所所所所所所',
  time: new Date('2018-07-15 20:03:38'),
  follow: 10,
  talks: 90,
  img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1532440233&di=3734e940a8e19c85aadc817d23c6716f&src=http://pic1.16pic.com/00/12/94/16pic_1294464_b.jpg',
};

export const itemCard = {
  id: 'blackboard-card',
  title: 'TRAVEL',
  desc: '嗖嗖嗖嗖嗖嗖所嗖嗖嗖嗖嗖嗖所所所所所所所所所',
  time: new Date('2018-07-15 20:03:38'),
  follow: 10,
  talks: 90,
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532370884327&di=b05c3838b2a47df500620fb167040f5b&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201505%2F08%2F20150508155454_vJMeU.jpeg',
};

export const listCard = Array().random.slice(0, 3).map(i => ({
  id: i,
  title: `article-${i}`,
  desc: '嗖嗖嗖嗖嗖嗖所嗖嗖嗖嗖嗖嗖所所所所所所所所所',
  time: new Date('2018-07-15 20:03:38'),
  follow: 10,
  talks: 90,
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532370884327&di=b05c3838b2a47df500620fb167040f5b&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201505%2F08%2F20150508155454_vJMeU.jpeg',
}));

export const gridCard = Array().random.map(i => ({
  id: i,
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532370884327&di=b05c3838b2a47df500620fb167040f5b&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201505%2F08%2F20150508155454_vJMeU.jpeg',
}));

export const smallListCard = Array().random.slice(0, 6).map(i => ({
  id: i,
  time: new Date(),
  title: `article-${i}`
}));

export const tags = Array().random.slice(0, 6).map(i => ({
  id: i,
  name: `tag-${i}`
}));
