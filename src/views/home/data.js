Array.prototype.random = Array.from({length: 6}).map((d, i) => i);

export const carouseData = Array().random.map(i => ({
  id: i,
  title: `carouseCard-${i}`,
  img: 'http://img.zcool.cn/community/0105455608951732f875a132b93e14.jpg@1280w_1l_2o_100sh.jpg',
  createTime: new Date('2018-07-15 20:03:38'),
  desc: `carouseCard-dec-${i}`
}));

export const paginationData = {
  id: `paginationData`,
  title: `火影忍者`,
  img: 'http://img.zcool.cn/community/0105455608951732f875a132b93e14.jpg@1280w_1l_2o_100sh.jpg',
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
  img: 'http://img.zcool.cn/community/0105455608951732f875a132b93e14.jpg@1280w_1l_2o_100sh.jpg',
};

export const itemCard = {
  id: 'blackboard-card',
  title: 'TRAVEL',
  desc: '嗖嗖嗖嗖嗖嗖所嗖嗖嗖嗖嗖嗖所所所所所所所所所',
  time: new Date('2018-07-15 20:03:38'),
  follow: 10,
  talks: 90,
  img: 'http://img.zcool.cn/community/0105455608951732f875a132b93e14.jpg@1280w_1l_2o_100sh.jpg',
};

export const listCard = Array().random.slice(0, 3).map(i => ({
  id: i,
  title: `article-${i}`,
  desc: '嗖嗖嗖嗖嗖嗖所嗖嗖嗖嗖嗖嗖所所所所所所所所所',
  time: new Date('2018-07-15 20:03:38'),
  follow: 10,
  talks: 90,
  img: 'http://img.zcool.cn/community/0105455608951732f875a132b93e14.jpg@1280w_1l_2o_100sh.jpg',
}));

export const gridCard = Array().random.map(i => ({
  id: i,
  img: 'http://img.zcool.cn/community/0105455608951732f875a132b93e14.jpg@1280w_1l_2o_100sh.jpg',
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
