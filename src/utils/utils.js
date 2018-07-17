/**
 * util js工具类
 * @author wds
 * */
import dayJs from 'dayjs';

export const THEMES = [
  '#4caf50',
  '#F44336',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FF9800',
  '#FF5722',
  '#795548',
  '#9E9E9E',
  '#607D8B',
  '#000000'
];

export function randomColor() {
  return THEMES[Math.floor(Math.random() * THEMES.length + 1)];
}

export function formatTime(date) {
  return dayJs(date).format('MMM DD, YYYY');
}
