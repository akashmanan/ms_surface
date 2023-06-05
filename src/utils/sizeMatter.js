import {Dimensions, Platform} from 'react-native';
import {
  SIZE_MATTERS_BASE_HEIGHT,
  SIZE_MATTERS_BASE_WIDTH,
  SIZE_MATTERS_BASE_WIDTH_WINDOWS,
  SIZE_MATTERS_BASE_HEIGHT_WINDOWS,
} from '@env';
import {
  s as sizeMatterS,
  vs as sizeMatterVS,
  ms as sizeMatterMS,
} from 'react-native-size-matters/extend';

const {width, height} = Dimensions.get('screen');

const guidelineBaseWidth =
  Platform.OS === 'windows'
    ? SIZE_MATTERS_BASE_WIDTH_WINDOWS
    : SIZE_MATTERS_BASE_WIDTH;
const guidelineBaseHeight =
  Platform.OS === 'windows'
    ? SIZE_MATTERS_BASE_HEIGHT_WINDOWS
    : SIZE_MATTERS_BASE_HEIGHT;

const s = (size, w = width) => {
  if (Platform.OS !== 'windows') {
    return sizeMatterS(size);
  } else {
    return (Number(w.toFixed()) / guidelineBaseWidth) * size;
  }
};

const vs = (size, h = height) => {
  if (Platform.OS !== 'windows') {
    return sizeMatterVS(size);
  } else {
    return (Number(h.toFixed()) / guidelineBaseHeight) * size;
  }
};

const ms = (size, w = width, factor = 0.5) => {
  if (Platform.OS !== 'windows') {
    return sizeMatterMS(size);
  } else {
    return size + (s(w, size) - size) * factor;
  }
};

export {s, vs, ms};
