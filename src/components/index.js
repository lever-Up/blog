'use strict'
import SvgIcon from './SvgIcon.vue';
import {toolbars, mavonEditor} from './MdReader';
import { CarouselCard, PaginationCard,
  BlackboardCard, ItemCard, ListCard,
  GridCard, SmallListCard, TagsCard,
  SmallListWithImgCard,
} from './cards/cards.js';
import ArticleList from './article-list/list.vue';
import SmallList from './small-list/small-list.vue';
import Image from './Image.vue';

/********************************
 * 组件export
 *******************************/
export {default as Loading} from './Loading.vue'; // loading 路由转跳

export { mavonEditor, toolbars }; // md 编辑器

/********************************
 * 全局组件注册
 *******************************/
const components = [
  SvgIcon,
  Image,
  ArticleList,
  SmallList,

  CarouselCard,
  PaginationCard,
  BlackboardCard,
  ItemCard,
  ListCard,
  GridCard,
  SmallListCard,
  TagsCard,
  SmallListWithImgCard
];

// Vue install
const config = (Vue, opts = {}) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default config;
