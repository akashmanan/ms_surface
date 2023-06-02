import {Dimensions} from 'react-native';
import {SIZE_MATTERS_BASE_HEIGHT, SIZE_MATTERS_BASE_WIDTH} from '@env';

const {width, height} = Dimensions.get('screen');

const guidelineBaseWidth = SIZE_MATTERS_BASE_WIDTH;
const guidelineBaseHeight = SIZE_MATTERS_BASE_HEIGHT;

Dimensions.addEventListener('change', val => {});

const s = (size, w = width) => {
  let scale = (Number(w.toFixed()) / guidelineBaseWidth) * size;
  return scale;
};
const vs = (size, h = height) => {
  let verticalScale = (Number(h.toFixed()) / guidelineBaseHeight) * size;
  return verticalScale;
};
const ms = (size, w = width, factor = 0.5) =>
  size + (s(w, size) - size) * factor;

export {s, vs, ms};
